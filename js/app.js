console.log("starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

let total = notes.add(3,3);
console.log(total);



// let user = os.userInfo();
// fs.appendFileSync("greetings.txt", `Hello, ${user.username}, you are ${notes.age} years old welcome back!`);




