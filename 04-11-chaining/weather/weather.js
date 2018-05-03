const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: Math.round((body.currently.temperature - 32)*5/9),
        apparentTemperature: Math.round((body.currently.apparentTemperature - 32)*5/9)
      });
    } else {
      callback('Unable to fetch weather for unknown reason.');
    }
  });
};

module.exports.getWeather = getWeather;
