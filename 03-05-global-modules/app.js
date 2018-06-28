// lodash manual - https://lodash.com/docs/4.17.10
console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

console.log(_.isString(true))
console.log(_.isString('Andrew'))
console.log(_.isBoolean(true))

const filteredArray = _.uniq(['Mike', 1, 'Andrew', 1, 2, 3, 4])
console.log(filteredArray)

console.log('Result', notes.add(9, -2))

const array1 = ['Andrew','Tseng',1]
const array2 = ['Chris','Tseng',2]

console.log(_.differenceBy(array1, array2))
// var user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`)
