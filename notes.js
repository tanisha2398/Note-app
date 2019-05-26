console.log('staring notes.js');
var addNote =(title,body) => {
    console.log('adding note',title,body);
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
