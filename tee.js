"use strict";

var Writable = require('stream').Writable;
var ws = Writable({decodeString: false});
var fs = require('fs');
var wfs = fs.createWriteStream('output.txt');

ws._write = function(chunk, enc, next){
	process.stdout.write(chunk);
	wfs.write(chunk);
	next();
};

process.stdin.pipe(ws);