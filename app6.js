// load fs module
const fs = require('fs');
// create read stream
const readStream = fs.createReadStream('./notes.txt', 'utf8');
// create a write stream
const writeStream = fs.createWriteStream('./notes_new_2.txt');
// readStream.on('data', (chunk) => {
//   // write the data chunk to the new file
//   writeStream.write(chunk);
//   // print the obtained data chunk
//   console.log('New chunk received:', chunk);
// } );

// readStream pipe to writeStream
readStream.pipe(writeStream);
