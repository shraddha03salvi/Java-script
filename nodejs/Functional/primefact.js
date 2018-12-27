//integer is the value for which we are finding prime factors
var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');

//var prompt = rl.userInput();

function primeFactor() {
prompt.question('Enter the number', (number) => {
  utility.primeFactor(number);
prompt.close();
})
}
primeFactor();
