var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function binaryString()
{
    var arr=[];
    var res=utility.arrayCall(arr);
    var ele=rl.question("Enter the element do you want to search ");
    var high=res.length,low=0;
   var res1=  utility.binaryString(res,low,high-1,ele);
    console.log(res1);

}
binaryString();