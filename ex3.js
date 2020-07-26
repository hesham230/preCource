   
    var result="";
    var readline = require('readline-sync');
    var val = readline.question("enter number between(0-9): ");
    
    switch(parseInt(val)){
        case 0:
            result = "Zero";
            break;
        case 1:
            result = "One";
            break;
        case 2:
            result = "Two";
            break;
        case 3:
            result = "Three";
            break;
        case 4:
            result = "Four";
            break;
        case 5:
            result = "Five";
            break;
        case 6:
            result = "Six";
            break;
        case 7:
            result = "Seven";
            break;
        case 8:
            result = "Eight"
            break;
        case 9:
            result = "Nine";  
            break;
        default:
            console.log(result = " Must be Between (0-9)! ")
    }
    console.log("the number is: " + result);
    
    
    