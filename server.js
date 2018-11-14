var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');

//configuring app with bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/about-page', function(request, response){
  response.sendFile(__dirname+'/about.html');
});

app.get('/new-article', function(request, response){
  response.sendFile(__dirname+'/form.html');
});

var article = [];

app.post('/article/create', function(request, response){
  console.log(request.body);//when you get a request you need to send back a response to client
  if(!request.body.title){
    return response.status(400).json({error: "Please add a title"});
  }
  article.push(request.body);
  return response.status(200).json({message: "Article successfully created"});
});

app.get('/article/list', function(request, response) {
    return response.status(200).json({articles: article});
})

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