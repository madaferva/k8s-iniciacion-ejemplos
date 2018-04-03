var os = require ('os')
var fs = require ('fs')

var http = require('http');
var ifaces

var file='/http/hosts.js'

fs.appendFile(file, os.hostname()+', ',function(err){
  if (err) throw err;
  console.log('Saved' + os.hostname())
});


var handleRequest = function(request, response) {
  fs.readFile(file, function(err, data){
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end(data);
  });
};
var www = http.createServer(handleRequest);
www.listen(8080);
