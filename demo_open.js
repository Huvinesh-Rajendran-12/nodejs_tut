const fs = require('fs');

fs.open('demo_openfile.txt', 'w', function(err, file) {
  if (err) throw err;
  console.log('Saved!');
});
