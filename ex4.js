function restaurantRecommendation(){
    var readline = require('readline-sync');
    let number = readline.questionInt("how many people are you going with? ");
    
    let kosher = readline.question("Should it be Kosher?");
    if(kosher != "y" && kosher != "Y" && kosher != "n" && kosher != "N"){
        throw "must enter y/Y/n/N !!"
    } else if (kosher == "y"  || kosher == "Y") {       
        var mehedarin = readline.keyInYN("Should it be Kosher Lemehadrin?")
    }   
        
    types = ['Burger', 'Pizza', 'Vegan', 'Beef'];
    index = readline.keyInSelect(types, 'What kind of food do you want?');
    switch(parseInt(index)){
        case 0:
            console.log("Go to Burger King");
            break;
        case 1:
            console.log("Go to Pizza Hut");
            break;    
        case 2:
            console.log("go to VegaNoo");
            break;
        case 3:
            console.log("Go to Meet & Eat");
            break;    
    }
      
}

restaurantRecommendation()