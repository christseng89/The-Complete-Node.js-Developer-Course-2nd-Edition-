console.log('Starting notes.js');

const addNote = () => {
  console.log('addNote');
  return 'New note';
};

const add = (a, b) => {
  return a + b;
};

module.exports = {add, addNote}