console.log("starting app.js ");

const fs = require('fs');
const os = require('os');
// var user = os.userInfo();
const notes = require('./notes.js');
const _ = require('lodash');
console.log(_.isString(true));
console.log(_.isString("jooo"));
console.log(_.uniq([2,'tani','tani',8,8,9,2]));
// var res = notes.addNote();
// console.log(res);
// var sum = notes.add(-9,10);
// console.log(sum);
//console.log(user);
// fs.appendFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.age}.` );
