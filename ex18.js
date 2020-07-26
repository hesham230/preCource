const readlineSync = require('readline-sync');
let len1 = readlineSync.questionInt("enter array1 length: ");

function reverseArray(arr){
    var arr = [];
    for(let i=0; i<len1; i++){
        arr[i] = readlineSync.questionInt("enter number: ");
        
    }
     console.log(arr);

    for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    console.log(arr);
}


console.log(reverseArray())