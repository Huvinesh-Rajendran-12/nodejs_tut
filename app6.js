// load fs module
const fs = require('fs');
// load zlib module
// this module is used to compress files and decompress them
const zlib = require('zlib');
// create read stream
const readStream = fs.createReadStream('./notes_new_2.txt.gz');
// create a write stream
const writeStream = fs.createWriteStream('./uncompressed_notes_new_2.txt');
// create a gzip transform stream
// const gzip = zlib.createGzip();
// create unzip transform stream
const unzip = zlib.createGunzip();
// readStream.on('data', (chunk) => {
//   // write the data chunk to the new file
//   writeStream.write(chunk);
//   // print the obtained data chunk
//   console.log('New chunk received:', chunk);
// } );

// readStream pipe to writeStream
readStream.pipe(unzip).pipe(writeStream);
