console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
//console.log(user);
fs.appendFileSync('greetings.txt', `Hello ${user.username}! \n`);

//Get IP Address ...
getIPAddress();

function getIPAddress() {
    require('dns').lookup(require('os').hostname(), function (err, addr, fam) {
        fs.appendFileSync('greetings.txt', `IP Address ${addr} \n`);
    })
}