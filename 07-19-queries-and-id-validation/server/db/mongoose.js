var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
  /* other options */
});

module.exports = {mongoose};
