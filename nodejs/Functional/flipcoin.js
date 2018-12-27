var rl = require('readline');
var prompt = rl.createInterface(process.stdin,process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("enter the number of flips",function(n){
    utility.flipcoin(n);
process.exit();
})