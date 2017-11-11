ipfs add -r public | tee ipfs.log
tail -n ipfs.log | tee ipfs.txt
pause