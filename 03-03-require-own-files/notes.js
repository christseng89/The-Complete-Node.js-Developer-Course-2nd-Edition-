console.log('Starting notes.js');
//console.log(module);

const addNote = () => {
  console.log('addNote');
  return 'New note';
};

const add = (a, b) => {
  return a + b;
};

const age = 25;

module.exports = {add, addNote, age}