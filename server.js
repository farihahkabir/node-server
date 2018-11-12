var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);

app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/about-page', function(request, response){
  response.sendFile(__dirname+'/about.html');
});

// var fs = require('fs');

// var server = http.createServer(function(req, res){
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   fs.readFile('index.html', function(err, data){
//     if(err){
//       return console.log("File read error");
//     }
//     res.end(data);
//   });
//   //res.end("Hello World\n");
// });

server.listen(process.env.PORT || 3000, process.env.IP, function(){ //c9 has predefined port (process.env.PORT) but if you use a local host, port 3000
  console.log('Server running');
});