let readlineSync = require('readline-sync');
let number = readlineSync.questionInt("Please enter number ");

var arr = [];

for(var i=0; i<number; i++){
    arr[i] = Math.floor(Math.random() * 50) + 1;
}

let minimum = Math.min.apply(null,arr);
let maximum = Math.max.apply(null,arr);

console.log(arr + "\n" +"min is: " + minimum + "\n"
            +"max is: " + maximum);
console.log("min Index " + arr.indexOf(minimum));
console.log("max Index " + arr.indexOf(maximum));            