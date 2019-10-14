var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var address = 'mongodb+srv://mayankyadavy29:<password>@node-todo-api-db-nrdvy.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(address || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose};