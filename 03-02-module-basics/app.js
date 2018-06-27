console.log('Starting app.')

const fs = require('fs')
const os = require('os')
const dns = require('dns')

const user = os.userInfo()
// console.log(stringToHex(os.EOL))
const carriageReturn = os.EOL

function getIPAddress() {
    dns.lookup(os.hostname(), function (err, addr, fam) {
        fs.appendFileSync('greetings.txt', `IP Address ${addr} ${carriageReturn}`)
    })
}
//console.log(user)
fs.appendFileSync('greetings.txt', `Hello ${user.username}! ${carriageReturn}`)
fs.appendFileSync('greetings.txt', `Hostname ${os.hostname()}, Path ${user.homedir} ${carriageReturn}`)
//Get IP Address ...
getIPAddress()
