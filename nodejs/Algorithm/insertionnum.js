var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function insertion()
{
  var arr=[];
  var res=Utility.insertArray(arr);
  var res1=Utility.insertion(res);
  console.log(res);

}
insertion();