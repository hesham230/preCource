console.log("\n" + "###############");
console.log("Hello! Welcome to the quiz!");
console.log("###############" + "\n");

let readlineSync = require('readline-sync');

var result,result1,result2,result3,result4,result5,result6 = 0; 

console.log("First Question ")
frameworks = ['what is gone?', 'only one in purim', 'i have only white gowns in my closest',
 'what is a closest?'];
index = readlineSync.keyInSelect(frameworks, 'how many white gowns do you have in your closest?');

switch(parseInt(index)){
    case 0:
        result = 2;
        break;
    case 1:
        result = 4;
        break;
    case 2:
        result = 1;
        break;
    case 3:
        result = 5;
        break;                
}

console.log("\n" + "---------------------------" + "\n");

console.log("Second Question ");
frameworks = ['white', 'blue', 'yellow','red'];
index = readlineSync.keyInSelect(frameworks, 'what is banana color?');

switch(parseInt(index)){
    case 0:
        result1 = 3;
        break;
    case 1:
        result1 = 2;
        break;
    case 2:
        result1 = 5;
        break;
    case 3:
        result1 = 4;
        break;                
}

console.log("\n" + "---------------------------" + "\n");

console.log("Third Question ");
frameworks = ['classification','diagnosis','statistics','diagnosis grouping'];
index = readlineSync.keyInSelect(frameworks, 'Grouping illnesses together based on similarities is called?');

switch(parseInt(index)){
    case 0:
        result2 = 5;
        break;
    case 1:
        result2 = 4;
        break;
    case 2:
        result2 = 1;
        break;
    case 3:
        result2 = 2;
        break;                
}

console.log("\n" + "---------------------------" + "\n");

console.log("Fourth Question ");
frameworks = ['A pseudopatient', 'A crazy person', 'A quasipatient','A somatic patient'];
index = readlineSync.keyInSelect(frameworks, 'A healthy person pretending to have symptoms is called');

switch(parseInt(index)){
    case 0:
        result3 = 3;
        break;
    case 1:
        result3 = 5;
        break;
    case 2:
        result3 = 4;
        break;
    case 3:
        result3 = 2;
        break;                
}

console.log("\n" + "---------------------------" + "\n");

console.log("Fifth Question ");
frameworks = ['Diagnosis', 'Classification', 'Pseudopatient','A medical problem'];
index = readlineSync.keyInSelect(frameworks, 'Identifying the nature and cause of an illness is called');

switch(parseInt(index)){
    case 0:
        result4 = 2;
        break;
    case 1:
        result4 = 3;
        break;
    case 2:
        result4 = 5;
        break;
    case 3:
        result4 = 1;
        break;                
}

console.log("\n" + "---------------------------" + "\n");

console.log("Sixth Question ");
frameworks = ['electroencephalography', 'echoencephalography', 'encephalograhy','echoelectrography'];
index = readlineSync.keyInSelect(frameworks, 'Which test is abbreviated as EEG?');

switch(parseInt(index)){
    case 0:
        result5 = 1;
        break;
    case 1:
        result5 = 2;
        break;
    case 2:
        result5 = 3;
        break;
    case 3:
        result5 = 4;
        break;                
}

console.log("\n" + "---------------------------" + "\n");

console.log("Seventh Question ");
frameworks = ['magnetic resonance spectroscopy', 'magnetic resonance imaging', 'magnetic resonance ultrasonography','magnetic resonance scan'];
index = readlineSync.keyInSelect(frameworks, 'Which test uses a strong magnetic field and continuous high frequency radio waves to produce an image?');

switch(parseInt(index)){
    case 0:
        result6 = 4;
        break;
    case 1:
        result6 = 3;
        break;
    case 2:
        result6 = 2;
        break;
    case 3:
        result6 = 1;
        break;                
}

var total = (result+result1+result2+result3+result4+result5+result6);

if(total <= 20){
    console.log("\n"+"---------Quiz Result----------"+"\n"+
                "You are not an Angle!"+"\n"+
                "------------------------------");
}else{
    console.log("\n"+"---------Quiz Result----------"+"\n"+
                "You are an Angle!"+"\n"+
                "------------------------------");
}
