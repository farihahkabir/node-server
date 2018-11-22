module.exports.new = function(request, response){
    response.render('form.ejs');
}

module.exports.create =  function(request, response){
  var new_article = new Article(request.body);
  new_article.save(function(err,data){
    if(err){
      return response.status(400).json({error: "Please add a title"});
      console.log(data);
    }
    return response.status(200).json({message: "Article successfully created"});
  })
  
  console.log(request.body);//when you get a request you need to send back a response to client
  // if(!request.body.title){
  //   return response.status(400).json({error: "Please add a title"});
  // }
  //article.push(request.body);
  //save(request.body) //stores new item in form to mongodb
  // return response.status(200).json({message: "Article successfully created"});
}