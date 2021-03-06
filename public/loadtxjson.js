//config
var gitrepo = 'https://raw.githubusercontent.com/ComicDatabase/ComicDatabase/master/';

//get url parma
(function($) {
  $.getUrlParam = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
})(jQuery);

//globle value
var ele;
var txjson;

//set pics
function fixPicUrl(u) {
  return u;
}

//gen element html
function ShowPics(url) {
  if (url != '') {
    ele += '<div>';
    ele += '<img src="' + fixPicUrl(url) + '" width="100%"/>';
    ele += '</div>';
  }
}

function getpics(e) {
  txjson = e;

  ele = '<div>';
  JSON.parse(e).picture.forEach(function(v, i) {
    console.log(v.url);
    ShowPics(v.url);
  });
  ele += '</div>';
  $("#comic")[0].innerHTML = ele;
}

//main
//get info
var mid = $.getUrlParam('mid');
var cid = $.getUrlParam('cid');
if (cid == null || mid == null) {
  $("#info")[0].innerHTML = 'welcome!';
} else {
  $("#info")[0].innerHTML = mid + '-' + cid;
  $.get('databases/' + mid + '/' + cid + '.json', getpics);
}
