
var readline = require('readline-sync');
let str = readline.question("please enter a string! ");

let replaced = str.split(' ').join('*');
console.log(replaced)




