var readline = require('readline-sync');
let str = readline.question("please enter a string! ");

function LetterChanges() {
    var newArray = [];
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if ('aeiouAEIOU'.indexOf(ch) !== -1) {
           newArray.push(ch.toUpperCase());
        } else {
           newArray.push(ch);
        }
    }

    return newArray.join("");
}
  
  console.log(LetterChanges());