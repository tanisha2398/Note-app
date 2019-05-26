console.log("starting app.js ");

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
var command = process.argv[2];
console.log(process.argv);
console.log("command : " ,command);
if(command === 'add'){
    console.log("add the note");
}else if(command === 'list'){
    console.log('listing all notes');
}else if(command === 'read'){
    console.log('reading individual note');
}else if(command === 'remove'){
    console.log('removing note');
}else{
    console.log('command not recognized')
}