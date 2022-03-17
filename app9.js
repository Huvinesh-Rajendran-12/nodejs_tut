// load http module
const http = require('http');
// load fs module
const fs = require('fs');
// create http server instance
const server = http.createServer((req, res) => {
  // readstream
  const readStream = fs.createReadStream('./static/img.png');
  // write heading
  res.writeHead(200, {'Content-Type': 'image/png'});
  // pipe readstream to response
  readStream.pipe(res);
}).listen(3000);
