var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function insertionString()
{
   var arr=[];
   var res=utility.arrayCall(arr);
  var res1=utility.insertionString(res);
  console.log(res1);
}
insertionString();

