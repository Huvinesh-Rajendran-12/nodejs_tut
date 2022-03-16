const fs = require('fs');
// create a file in the current directory

// write to a file or create it if it doesn't exist
fs.writeFile('notes3.txt', 'This is a test', (err) => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('File written successfully');
    fs.readFile('notes3.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file', err);
      } else {
        console.log('File contents:', data);
      }
    });
  }
});

// rename file
fs.rename('notes3.txt', 'notes4.txt', (err) => {
  if (err) {
    console.log('Error renaming file', err);
  } else {
    console.log('File renamed successfully');
  }
});

// append new line to file
fs.appendFile('notes4.txt', '\nThis is a new line', (err) => {
  if (err) {
    console.log('Error appending file', err);
  } else {
    console.log('File appended successfully');
  }
});

// delete the file
fs.unlink('notes4.txt', (err) => {
  if (err) {
    console.log('Error deleting file', err);
  } else {
    console.log('File deleted successfully');
  }
});
