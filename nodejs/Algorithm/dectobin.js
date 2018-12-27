var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function tobin()
{
 var num=rl.question("Enter your decimal value ");
  var res=utility.tobin(num);
  console.log("convertes form ",res);
}
tobin();