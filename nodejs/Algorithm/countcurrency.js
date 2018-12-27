var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
//var prompt=rl.userInput();
prompt.question("Enter an amount you want to dispense: ",function(amount){
    //var amount=utility.userInput();
    utility.vendingMachine(amount);
    process.exit();
})

/*var r1=require('../utility/utility.js');
var prompt=r1.userInput();
prompt.question("enter the amout ",function(amount){
r1.vendingMachine(amount);
process.exit();
})*/