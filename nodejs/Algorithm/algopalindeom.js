var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function palindrome() {
    var num = rl.question("Enter the range");
    console.log("The Palindrome and Anagaram are present in that range")
    for (let i = 2; i < num; i++) {
        if (utility.isPrime(i) && utility.palindrome(i)) {
            console.log(i);
        }
    }
}
palindrome();
    