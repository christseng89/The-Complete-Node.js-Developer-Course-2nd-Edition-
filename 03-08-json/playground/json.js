// #1 Convert Obj to Json

console.log('Starting Step #1 。。。')
var obj = {
  name: ['Andrew', 'Chris \'Tseng']
}
var stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)
var parseObj = JSON.parse(stringObj)
console.log(parseObj)
console.log(parseObj.name[0], '\n')

// #2 Convert Json to Obj
console.log('Starting Step #2 。。。')
var personString = '{"name": ["Andrew","Chris"], "age": [25,60]}'
var person = JSON.parse(personString)
console.log(typeof person)
console.log(person)
console.log(person.name[0], person.age[0], '\n')

// #3 Convert Obj to Jason then Write into file.
const fs = require('fs')

var originalNote = {
  title: ['Some Title0', 'Title1', 'Title2'],
  body: ['Some Body0', 'Body1', 'Body2']
}
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

// #4 Read from File in Json format, then convert it to Obj
console.log('Starting Step #4 。。。')
var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(typeof note, typeof note.title, note.title)
const noteTitle = note.title
const noteBody = note.body

// #4.1 add filter for Object ....
let noteFilter = noteTitle.filter(noteTitle1 => noteTitle1 === 'Title2')
console.log(`Filter Title #1, Type of 'noteFilter[0]' is ${typeof noteFilter[0]} and 'noteFilter[0]' equals to ${noteFilter[0]}`)

noteFilter = noteTitle.filter(noteTitle1 => noteTitle1 === 'Titlex')
console.log('Filter Title #2', noteFilter[0])

const bodyFilter = noteBody.filter(noteBody1 => noteBody1 === 'Body2')
console.log('Filter Body #1', bodyFilter, bodyFilter[0], '\n')

// #5 Object Filter Examples...
console.log('Starting Step #5 。。。')
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"]
console.log(typeof words)
const longWords = words.filter(word1 => word1.length > 6)
console.log(typeof longWords)
console.log(`Words length greater than 6 are: ${longWords}`)