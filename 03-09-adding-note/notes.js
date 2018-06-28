console.log('Starting notes.js', '\n')
const fs = require('fs')

const addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  }

  try {
    // var notesString = fs.readFileSync('notes-data.json')
    // notes = JSON.parse(notesString)
    notes = readNotes()
  } catch (e) {

  }

  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }
}

const getAll = () => {
  console.log('Getting all notes。。。')
  notes = readNotes()
  notes.forEach((note) => {
    console.log(`Title: ${note.title}`)
  })
}

const getNote = (title) => {
  // console.log('Getting note', title)
  // var notesString = fs.readFileSync('notes-data.json')
  // notes = JSON.parse(notesString)
  notes = readNotes()
  note = notes.filter((note) => note.title === title)
  if (note[0] !== undefined) {
    console.log('Getting note。。。', note[0].title)
  } else {
    console.log(`Title ${title} cannot be found!`)
  }
}

const removeNote = (title) => {
  console.log('Removing note', title)
  //notes.splice()
}

const readNotes = () => {
  const notesString = fs.readFileSync('notes-data.json')
  return JSON.parse(notesString)
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}