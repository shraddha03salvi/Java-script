var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');

function binaryToDecimal()
{
 var num= rl.question("Enter your binary value ");
  var ax=utility.binaryToDecimal(num);
  console.log(ax);
}
binaryToDecimal();
