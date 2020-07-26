let readline = require('readline-sync');
let str = readline.question("please enter a string! ");


function longestWord() {
  var string = str.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < string.length; i++) {
      var checkedLetters = "";
      for (var j = 0; j < string[i].length; j++) {
          if (/[a-zA-Z]/.test(string[i][j])) {
              checkedLetters += string[i][j];
          }
      }
      if (longest < checkedLetters.length) {
          longest = checkedLetters.length;
          word = checkedLetters;
      }
  }
  return word;
}
  console.log("The Longest Word is: " + longestWord())

