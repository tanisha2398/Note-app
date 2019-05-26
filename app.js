console.log("starting app.js ");

const fs = require('fs');
const os = require('os');
// var user = os.userInfo();
const notes = require('./notes.js');
// var res = notes.addNote();
// console.log(res);
var sum = notes.add(-9,10);
console.log(sum);
//console.log(user);
// fs.appendFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.age}.` );
