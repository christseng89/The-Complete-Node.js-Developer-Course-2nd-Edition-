const env = process.env.NODE_ENV || 'development';
//console.log ('Environment . . . ', env.toString(), env.length);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//  console.log('TEST Environment ....');
}

module.exports = {env};
