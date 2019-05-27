console.log('staring notes.js');
const fs = require('fs');

var addNote =(title,body) => {
    // console.log('adding note',title,body);
    var notes = [];
    var note = {
        title,
        body
    };
    try{
    var noteString= fs.readFileSync('notes-data.json');
    notes=JSON.parse(noteString);
    // console.log("this is object",notes);
    }
    catch(e){

    }

    var duplicateNotes=notes.filter((note)=> note.title === title);
    
    if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes)); 
    }
    
};
var getAll =()=>{
    console.log('getting all notes');
};

var readNote =(title) => {
    console.log('reading note',title);
};

var removeNote =(title) => {
    console.log('removing note',title);
};

module.exports={
    addNote,
    getAll,
    readNote,
    removeNote
};
