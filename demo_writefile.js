const fs = require('fs');

fs.writeFile('demo_writefile.txt', 'Hello World!', function(err) {
  if (err) throw err;
  console.log('Saved!');
});
