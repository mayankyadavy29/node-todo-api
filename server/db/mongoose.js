var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var addr = "mongodb+srv://mayankyadavy29:Allowus123@node-todo-api-db-nrdvy.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(addr || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose};