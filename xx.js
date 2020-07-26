
const readlineSync = require('readline-sync');
console.log("\n"+"////////---------Welcome To War---------////////"+"\n");

let total = 50;

let name = readlineSync.question("please enter your name: ");
console.log("Hello " + name + " You currently have " + total + " ILS");
let number = readlineSync.questionInt("Place your bet for the next round: 1 to " + total + " ");

let userCard = Math.floor(Math.random() * 12) + 1;
let computerCard = Math.floor(Math.random() * 12) + 1;
console.log("Your card is " + userCard + " And my card is " + computerCard);

if(number < 1 || number > total){
    throw('I said between 1 and 50 And you typed ' + total + "\n"
                + "I dont play with lairs!!! Bye ");
}
function he(){
let newTotal;
if(userCard > computerCard){
    console.log("Congratz you won this round!");
    newTotal = total + number;
    console.log("you now have " + newTotal);
    if(newTotal > 0){
        options = ["play another round? ", "exit"];
        index = readlineSync.keyInSelect(options, 'What would you like to do?');
        switch(parseInt(index)){
            case 0:
                he();
                break;
            case 1:
                console.log("You have " + total + " ILS, Good Bye");    
            }
        }
    } else if( userCard < computerCard){
    console.log("i win this round!");
    newTotal = total - number;
    console.log("you now have " + newTotal);

    }else{
    console.log("i win this round!")
    newTotal = total - number;
    console.log("you now have " + newTotal);
    }

}


he();