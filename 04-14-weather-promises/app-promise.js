const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

var encodedAddress = encodeURIComponent(argv.address)
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.')
  }

  var lat = response.data.results[0].geometry.location.lat
  var lng = response.data.results[0].geometry.location.lng
  var weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`

  console.log(response.data.results[0].formatted_address)
  return axios.get(weatherUrl)

}).then((response) => {
  var temperature = Math.round((response.data.currently.temperature - 32) * 5 / 9)
  var apparentTemperature = Math.round((response.data.currently.apparentTemperature - 32) * 5 / 9)
  console.log(`It's currently ${temperature} Celsius. It feels like ${apparentTemperature}.`)

}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.')
  } else {
    console.log(e.message)
  }
})

//console.log('test ....')
//#Performing multiple concurrent requests
//https://www.npmjs.com/package/axios
