const request = require('request');

function requestBody (addr) {
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+addr,
    json: true
  }, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2),'\n');
  });
}
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=玄武大道 南京',
//   json: true
// }, (error, response, body) => {
//   console.log(body);
// });

console.log('Before call back...');
requestBody('1301 lombard street philadelphia');

requestBody('Xuan Wu DaDao Nanjing');
console.log('After call back...');

