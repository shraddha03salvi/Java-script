var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function binaryToDecimal()
{
 var num= rl.question("Enter your binary value ");
 utility.binaryToDecimal(num);
}
binaryToDecimal();