function stringToHex(str) {

    //converting string into buffer
    let bufStr = Buffer.from(str, 'utf8');

    //with buffer, you can convert it into hex with following code
    return bufStr.toString('hex');

}

const hexString = stringToHex('some string here');
console.log (hexString)