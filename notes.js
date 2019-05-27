console.log('staring notes.js');
const fs = require('fs');

var fetchNote = () => {
    try{
        var noteString= fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
        // console.log("this is object",notes);
       }
    catch(e){
            return [];
            }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes)); 
};


var addNote =(title,body) => {
    // console.log('adding note',title,body);
    var notes = fetchNote();
    var note = {
        title,
        body
    };
    

    var duplicateNotes=notes.filter((note)=> note.title === title);
    
    if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
    }
    
};
var getAll =()=>{
    console.log('getting all notes');
};

var readNote =(title) => {
    var notes = fetchNote();
    var foundNote = notes.filter((note) => note.title === title);
    return foundNote[0];
};

var removeNote =(title) => {
    var notes= fetchNote();
    var filteredNote = notes.filter((note) => note.title !== title);
    saveNotes(filteredNote);

    return notes.length!==filteredNote.length;

};

var logNote =(note)=>{
    console.log("===================");
    console.log(`Title ${note.title}`);
    console.log(`body: ${note.body}`);
    console.log("===================")
}


module.exports={
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};
