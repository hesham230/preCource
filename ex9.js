var readline = require('readline-sync');
let number = readline.questionInt("please enter a number ");

var isPrime;
for(var i=2; i<= number; i++){
    isPrime = 1;
    for(var j=2; j<=i/2; j++){
        if(i%j == 0){
            isPrime = 0;
            break;
        }
    }
    if(isPrime == 1){
        console.log(i);
    }
}