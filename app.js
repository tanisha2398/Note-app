const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const _ = require('lodash');
var titleOption={
    describe: 'Title of Note',
    demand: true,
    alias: 't'
};
var bodyOption={
    describe: "Body of Note",
    demand:true,
    alias: 'b'
};

const argv = yargs
.command('add','Add a new Note',{
 title:titleOption,
 body:bodyOption
})
.command('list','Display list of all Notes')
.command('read','Read a note',{
    title:titleOption
})
.command('remove','Remove a note',{
    title:titleOption
})
.help()
.argv;
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