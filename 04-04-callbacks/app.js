const request = require('request')

const requestBody = (addr) => {
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addr,
    json: true
  }, (error, response, body) => {
    console.log('statusCode:', response.statusCode)
    // console.log('Address 。。。', addr, JSON.stringify(body, undefined, 2))
    if (body.results[0] !== undefined) {
    console.log('Address ', addr,'its location is ', body.results[0].geometry.location)
    } else {
      console.log('Address cannot be accessed!')
    }
    console.log('\n')
  })
}

console.log('Before call back...')
requestBody('1301 lombard street philadelphia')

requestBody('Xuan Wu DaDao Nanjing')
console.log('After call back...')