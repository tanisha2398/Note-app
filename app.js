const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const _ = require('lodash');


const argv = yargs.argv;
var command = argv._[0];


if(command === 'add'){
    // console.log("add the note");
    var note = notes.addNote(argv.title,argv.body);
    // console.log(typeof note);
    if(note){
        console.log("note created");
        notes.logNote(note);
    }else{
        console.log("note title taken");
    }
}else if(command === 'list'){
    var allNote=notes.getAll();
    console.log(`Printing ${allNote.length} note(s).`);
    allNote.forEach((note)=> notes.logNote(note));
}else if(command === 'read'){
    var note = notes.readNote(argv.title);
    if(note){
        console.log("note found");
        notes.logNote(note);
    }else{
        console.log("note not found");
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "note is removed" : "note not found";
    console.log(message); 
}else{
    console.log('command not recognized')
}