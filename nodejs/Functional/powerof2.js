var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("enter the exponent ",function(n){

  utility.Power(n);
  
  
  

})