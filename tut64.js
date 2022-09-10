// console.log('Module tutorial');

const fs = require("fs");
let text= fs.readFileSync("the.txt","utf-8");

// console.log(text);

text=text.replace('start' , 'Good');

//Creating a new file
fs.writeFileSync('Gooder.txt',text);

console.log(text);