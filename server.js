var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
//var Article = require('./models/Article.js');
//Connecting MongoDB
//var mongo = require('mongodb');

//for c9: where mongodb is running
var db; //contains database value after successful connection
var db_url = "mongodb://" + process.env.IP + ":27017"

// mongo.MongoClient.connect(db_url, {useNewUrlParser:true}, function(err, client){
//   if(err){
//     console.log('Could not connect to MongoDB');
//   }
//   else{
//     db = client.db('node-cw9');
//   }
// })

//Mongoose code
//install mongoose
var mongoose = require("mongoose");

//connecting to mongoose
mongoose.connect(db_url+"/node-cw9");
mongoose.connection.on('error', function(){
  console.log('Could not connect to mongodb');
});

//define schema
// var Schema = mongoose.Schema;

// var articleSchema = new Schema({
//   title: {
//     type: String,
//     required: "Title required"
//   },
//   content: {
//     type: String
//   }
// });

// //declare a model to call query fields on it
// var Article = mongoose.model('Article', articleSchema);


//Save function takes any data from user and saves it to mongodb
// var save = function(form_data){
//   db.createCollection('articles', function(err,collection){
    
//   });
//   var collection = db.collection('articles');
//   collection.save(form_data);
// }


//configuring app with bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
  response.render('index.ejs');
});

app.get('/about-page', function(request, response){
  response.render('about.ejs');
});

require('./routes/article-routes.js')(app);

server.listen(process.env.PORT || 3000, process.env.IP, function(){ //c9 has predefined port (process.env.PORT) but if you use a local host, port 3000
  console.log('Server running');
});


// app.get('/new-article', function(request, response){
//   response.sendFile(__dirname+'/views/form.html');
// });

// var article = [];

// app.post('/article/create', function(request, response){
//   var new_article = new Article(request.body);
//   new_article.save(function(err,data){
//     if(err){
//       return response.status(400).json({error: "Please add a title"});
//       console.log(data);
//     }
//     return response.status(200).json({message: "Article successfully created"});
//   })
  
//   console.log(request.body);//when you get a request you need to send back a response to client
//   // if(!request.body.title){
//   //   return response.status(400).json({error: "Please add a title"});
//   // }
//   //article.push(request.body);
//   //save(request.body) //stores new item in form to mongodb
//   // return response.status(200).json({message: "Article successfully created"});
// });

// app.get('/article/list', function(request, response) {
//     return response.status(200).json({articles: article});
// })

// article.push({title:"Test article 1", content:"content 1"});
// article.push({title:"Test article 2", content:"content 2"});

// app.get('/article/:articleID', function(request, response){
//   response.render('../article.ejs', {
//     article: article[request.params.articleID]
//   })
// });


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

