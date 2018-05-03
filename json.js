// #1 Convert Obj to Json
// var obj = {
//   name: ['Andrew','Chris \'Tseng']
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var parseObj = JSON.parse(stringObj);
// console.log(parseObj.name[0]);

// #2 Convert Json to Obj
// var personString = '{"name": ["Andrew","Chris"], "age": [25,60]}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log(person.name[0], person.age[0]);

// #3 Convert Obj to Jason then Write into file.
const fs = require('fs');

var originalNote = {
  title: ['Some Title0','Title1', 'Title2'],
  body: ['Some Body0', 'Body1', 'Body2']
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// #4 Read from File in Json format, then convert it to Obj
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note, typeof note.title, note.title);
var noteTitle = note.title;

// #4.1 add filter for Object ....
let noteFilter = noteTitle.filter(noteTitle1 => noteTitle1 === 'Title2');
console.log('Filter #1', noteFilter);

noteFilter = noteTitle.filter(noteTitle1 => noteTitle1 !== 'Title2');
console.log('Filter #2', noteFilter);

// #5 Object Filter Examples...
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
// console.log(typeof words);
// let longWords = words.filter(word1 => word1.length > 6);
// console.log(typeof longWords);
// console.log(longWords);
