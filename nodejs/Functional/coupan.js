var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');``
prompt.question("Enter how many coupan you want=", (num) => {
    utility.coupan(num);
})
/*var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function coupan()
{
  var ans = readline.question("Enter the number of coupans do you want ");
  var res=Utility.coupan(ans);
  console.log("Total number of coupons",res)
}
coupan();*/