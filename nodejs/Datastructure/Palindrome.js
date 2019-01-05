var utility = require('../Utility/utility.js');
var rl = require('readline-Sync');
var dqNew = require('../Datastructure/Deque');

function palindromeChecker() {
    var deque = new dqNew.deque;
 
    console.log("Enter a string to check palindrome ");
 
    try {
       var st = utility.inputread();
       if (st == "") throw "Empty string found"
       if (st == Number) throw "String required , Number found"
 
       console.log("");
       if (deque.checkPalindrome(st)) {
          console.log(st + " is a palindrome");
       }
       else {
          console.log(st + " is not a palindrome");
       }
 
    } catch (err) {
       console.log("Error: " + err);
    }
 
 }
 palindromeChecker();
