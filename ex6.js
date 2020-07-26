let readline = require('readline-sync');
let number1 = readline.questionInt("please choose a number larger than 10: ");

while(number1 <= 10){
    number1 = readline.questionInt("please choose a number LARGER than 10: ");
}
    console.log("thank you "); 
