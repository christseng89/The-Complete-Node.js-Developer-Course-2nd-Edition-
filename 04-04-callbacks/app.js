const request = require('request')

const request = (addr) => {
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addr,
    json: true
  }, (error, response, ) => {
    console.log('statusCode:', response.statusCode)
    // console.log('Address 。。。', addr, JSON.stringify(, undefined, 2))
    if (.results[0] !== undefined) {
      console.log('Address', addr, 'its location is', .results[0].geometry.location)
    } else {
      console.log('Address cannot be accessed!')
    }
    console.log('\n')
  })
}

console.log('Before call back...')
request('1301 lombard street philadelphia')

request('Xuan Wu DaDao Nanjing')
console.log('After call back...')