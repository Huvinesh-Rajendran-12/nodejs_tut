const http = require('http'); // Import the http module
const url = require('url'); // Import the url module

http.createServer(function(req, res) { // Create a server
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write the server response header
  const q = url.parse(req.url, true).query;
  // Parse the query string from the request
  const txt = q.year + ' ' + q.month;
  // Create a string to write to the response
  res.end(txt);
  // Write the response
}).listen(5051);
