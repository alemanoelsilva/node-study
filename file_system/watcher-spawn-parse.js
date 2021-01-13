'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

const SPACE = /\s+/

if (!filename) {
	throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => {
    const ls = spawn('ls', ['-lh', filename]);
    let output = '';

	ls.stdout.on('data', (chunk) => {
		output += chunk.toString();
	});

	ls.on('close', function(){
		let parts = output.split(SPACE);
		console.log([parts[0], parts[4], parts[8]]);
	});
});
console.log('Now watching ' + filename + ' for changes...');