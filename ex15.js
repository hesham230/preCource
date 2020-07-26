let readlineSync = require('readline-sync');
let number = readlineSync.questionInt("Please enter number ");

var arr = [];

for(var i=0; i<number; i++){
    arr[i] = Math.floor(Math.random() * 50) + 1;
}
console.log(arr + "\n" + "Min is: " +Math.min.apply(null,arr) +
            "\n" + "Max is: " + Math.max.apply(null,arr));