var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];
  // console.log('\n Env: . . . ', env, '\n', 'Config: . . . ', envConfig);
  // console.log('\n Object Keys: . . ', Object.keys(envConfig));

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

module.exports = {env};
