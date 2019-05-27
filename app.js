console.log("starting app.js ");

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const _ = require('lodash');


const argv = yargs.argv;
var command = argv._[0];



console.log('yargs : ',argv);
console.log("command : " ,command);


if(command === 'add'){
    // console.log("add the note");
    var note = notes.addNote(argv.title,argv.body);
    // console.log(typeof note);
    if(note){
        console.log("note created");
        console.log("================");
        console.log(`Title ${note.title}`);
    }else{
        console.log("note title taken");
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.readNote(argv.title);
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "note is removed" : "note not found";
    console.log(message); 
}else{
    console.log('command not recognized')
}