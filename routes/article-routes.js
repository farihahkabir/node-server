module.exports = function(app){
    var Article = require('./../models/Article.js');
    var article = require('./../controllers/article-controllers.js');
    
    app.get('/new-article', article.new);
    
    app.post('/article/create', article.create);
    
    app.get('/article/list', function(request, response) {
        return response.status(200).json({articles: article});
    })
    
    var article = [{title: "Title1", content: "Content1"}];
    
    app.get('/article/:articleID', function(request, response){
      response.render('article.ejs', {
        article: article[request.params.articleID]
      })
    });
}