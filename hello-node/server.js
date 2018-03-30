var os = require ('os')

var http = require('http');
var ifaces
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('<html><body><h1>Hostname:</h1> <p style="color: red">'+ os.hostname() + '</p></body></html>');
};
var www = http.createServer(handleRequest);
www.listen(8080);
