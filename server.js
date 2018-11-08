var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', function(err, data){
    if(err){
      return console.log("File read error");
    }
    res.end(data);
  });
  //res.end("Hello World\n");
});

server.listen(process.env.PORT || 3000, process.env.IP, function(){ //c9 has predefined port (process.env.PORT) but if you use a local host, port 3000
  console.log('Server running');
});
