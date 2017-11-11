ipfs add -r public | tee ipfs.log
tail -n 1 ipfs.log | tee ipfs.txt
pause