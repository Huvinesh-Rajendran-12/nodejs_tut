// load fs module
const fs = require('fs');
// create a new directory
/*
fs.mkdir('test', (err) => {
  if (err) {
    console.log('Error creating directory', err);
  } else {
    // write file
    fs.writeFile('./test/notes.txt', 'This is a test', (err) => {
      if (err) {
        console.log('Error writing file', err);
      } else {
        console.log('File written successfully');
        // read file
        fs.readFile('./test/notes.txt', 'utf8', (err, data) => {
          if (err) {
            console.log('Error reading file', err);
          } else {
            console.log('File contents:', data);
          }
        });
      }
    });
  }
});

// delete the file inside the directory and then delete the directory
fs.unlink('./test/notes.txt', (err) => {
  if (err) {
    console.log('Error deleting file', err);
  } else {
    console.log('File deleted successfully');
    fs.rmdir('test', (err) => {
      if (err) {
        console.log('Error removing directory', err);
      } else {
        console.log('Directory removed successfully');
      }
    } );
  }
});
*/

// read directory
fs.readdir('example', (err, files) => {
  if (err) {
    console.log('Error reading directory', err);
  } else {
    console.log('Files in directory:', files);
    // delete files in directory
    for (const file of files) {
      fs.unlink(`./example/${file}`, (err) => {
        if (err) {
          console.log('Error deleting file', err);
        } else {
          console.log('File deleted successfully');
        }
      });
    }
  }
},
);
