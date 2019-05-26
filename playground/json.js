// var obj = {
//     name: 'Tanisha'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Tanisha","age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
//Add new note
var originalNote = {
    title: 'Some Title',
    body: 'some Body'
};
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);
console.log(typeof originalNoteString);
console.log(originalNoteString);
//Read new note 
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
 console.log(note);