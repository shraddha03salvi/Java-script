var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');;
function bubbleSort()
{
  var arr=[];
  var res=utility.arrayCall(arr);
 var res1=utility.bubbleSort(res);
  console.log(res1);
}
bubbleSort();
