let readlineSync = require('readline-sync');
let len1 = readlineSync.questionInt("enter array1 length ");
let len2 = readlineSync.questionInt("enter array2 length ");

function joinArrays(arr1,arr2){
    var arr1 = [];
    var arr2 = [];

    for(var i=0; i<len1; i++){
        arr1[i] = readlineSync.question("enter string ");
    }
    console.log(arr1);

    for(var j=0; j<len2; j++){
        arr2[j] = readlineSync.question("enter string "); 
    }
    console.log(arr2);

    var newArr = arr1.concat(arr2);
    return newArr;
}

console.log(joinArrays());