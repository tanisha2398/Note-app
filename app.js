console.log("starting app.js ");

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const _ = require('lodash');


const argv = yargs.argv;
var command = process.argv[2];



console.log('yargs : ',argv);
console.log("command : " ,command);


if(command === 'add'){
    // console.log("add the note");
    notes.addNote(argv.title,argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.readNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('command not recognized')
}