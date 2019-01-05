var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function insertion()
{
  var arr=[];
  var res=utility.insertArray(arr);
  var res1=utility.insertion(res);
  console.log(res1);

}
insertion();