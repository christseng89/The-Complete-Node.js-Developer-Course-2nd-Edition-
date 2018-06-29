const request = require('request')

const requestBody = (addr) => {
  request({
    url: `https://console.developers.google.com/apis/credentials?project=storied-polymer-203509`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2),'\n')
  }) 

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
    json: true
  }, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2),'\n')
  })
}

console.log('Call back start...')
requestBody('1301 lombard street philadelphia')
requestBody('Xuan Wu DaDao Nanjing')
console.log('End of program...')

