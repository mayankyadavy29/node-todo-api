var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var addr = "mongodb+srv://mayankyadavy29:<password>@node-todo-api-db-nrdvy.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect('mongodb://localhost:27017/TodoApp' || addr, {useNewUrlParser: true});

module.exports = {mongoose};