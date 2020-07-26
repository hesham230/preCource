   function isEqualTen(){
       var readline = require('readline-sync');
       var number1 = readline.question("enter 1st number: ");
       var number2 = readline.question("enter 2nd number: ");
       
       var result = parseInt(number1) + parseInt(number2);
       if(result === 10){
            console.log("makes 10");
       }  else {
            console.log("nope");
       }

   }

   isEqualTen();