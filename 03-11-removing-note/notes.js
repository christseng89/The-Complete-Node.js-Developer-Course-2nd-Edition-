console.log('Starting notes.js')

const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  console.log('Getting all notes。。。')
  notes = fetchNotes()
  notes.forEach((note) => {
    console.log(`Title: ${note.title}`)
  })
}

var getNote = (title) => {
  notes = fetchNotes()
  note = notes.filter((note) => note.title === title)
  if (note[0] !== undefined) {
    console.log('Getting note。。。', note[0].title)
  } else {
    console.log(`Title ${title} cannot be found!`)
  }
}

var removeNote = (title) => {
  var notes = fetchNotes()
  var filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
