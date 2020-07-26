var readline = require('readline-sync');
let number = readline.questionInt("please enter a positive number ");

// Using for loop 
function factorial() {
    if (number === 0 || number === 1){
      console.log("1"); // return 1;
    } for (let i = number - 1; i >= 1; i--) {
      number *= i;
    }
    console.log(number); // return number;
  }

  factorial();



  // Using Recursion !
// function factorial() {
//     let result = number;
//     if (number === 0 || number === 1) 
//       console.log(1); // return 1
//     while (number > 1) { 
//       number--;
//       result *= number;
//     }
//     console.log(result); // return result
//   }
//   factorial()