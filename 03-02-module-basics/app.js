console.log('Starting app.')

const fs = require('fs')
const os = require('os')

const user = os.userInfo()
// console.log(stringToHex(os.EOL))
const carriageReturn = os.EOL
//console.log(user)
fs.appendFileSync('greetings.txt', `Hello ${user.username}! ${carriageReturn}`)
fs.appendFileSync('greetings.txt', `Hostname ${os.hostname()}, Path ${os.homedir()} ${carriageReturn}`)
//Get IP Address ...
getIPAddress()

function getIPAddress() {
    require('dns').lookup(require('os').hostname(), function (err, addr, fam) {
        fs.appendFileSync('greetings.txt', `IP Address ${addr} ${carriageReturn}`)
    })
}

// function stringToHex(str) {
//     //converting string into buffer
//     let bufStr = Buffer.from(str, 'utf8')
//     //with buffer, you can convert it into hex with following code
//     return bufStr.toString('hex')
// }
