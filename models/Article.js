var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: "Title required"
  },
  content: {
    type: String
  }
});

//declare a model to call query fields on it
var Article = mongoose.model('Article', articleSchema);

module.exports = Article;