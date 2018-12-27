var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');function bubbleString()
{
    var arr=[];
   var res= utility.arrayCall(arr);
  var ans = utility.bubbleString(res);
   console.log(ans);
}
bubbleString();