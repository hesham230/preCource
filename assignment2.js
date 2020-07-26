
const readlineSync = require('readline-sync');
console.log("\n"+"////////---------Welcome To War---------////////"+"\n");

let total = 50;

let name = readlineSync.question("please enter your name: ");
console.log("Hello " + name + " You currently have " + total + " ILS");

// 3 Step
function he(){    
let number = readlineSync.questionInt("Place your bet for the next round: 1 to " + total + " ");

let userCard = Math.floor(Math.random() * 12) + 1;
let computerCard = Math.floor(Math.random() * 12) + 1;
console.log("Your card is " + userCard + " And my card is " + computerCard);

let newTotal;

if(number < 1 || number > total){
    throw('I said between 1 and 50 And you typed ' + total + "\n"
                + "I dont play with lairs!!! Bye ");
}

if( userCard < computerCard ){
    total = total - number;
    console.log("i won this round, you have now " + total + " ILS.");

    if(total - number === 0){
        console.log("You dont have enough money to play, I win the game." + "\n" + "Good Bye!")
    }else if(total - number > 0){
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
    }else if (userCard > computerCard){
        total = total +number;
        console.log("Congratz! You Won The Game. You now have " + total + " ILs.");
    types = ['play another round? ', 'leave with my money :)']
    index = readlineSync.keyInSelect(types, 'What would you like to do?')
    switch(parseInt(index)){
        case 0:
            he();
            break;
        case 1:
            console.log("Good Luck next time!")
            break;
        }
    }else if (userCard === computerCard){
        console.log("i won this round, you have now " + total + " ILS.");

    if(total - number === 0){
        console.log("You dont have enough money to play, I win the game." + "\n" + "Good Bye!")
    }else if(total - number > 0){
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
    }
}

he()
