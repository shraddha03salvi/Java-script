

var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
//var Utility = require('../../UtilityProgram/Utility');
//var readline = require('readline-sync');
function binarySearch() {
    var arr = [];
   var res= utility.arrayCall(arr);
   var low=0,high=res.length-1;
   console.log("Enter the element you want search");
   var ele=rl.question('');
  var res1= utility.binarySearch(res,low,high,ele);
  console.log("The number is found on the index",res1);

}
binarySearch();