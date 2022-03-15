const fs = require('fs');

fs.appendFile('demo_appendfile.txt', 'Hello World!', function(err) {
  if (err) throw err;
  console.log('Saved!');
});
