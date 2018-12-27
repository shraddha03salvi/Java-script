var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function toBinary() {
    var num = rl.question("Enter your decimal value");
    //   var string="";
    //   var num1=string+num;
   // console.log("he ", num);
   utility.toBinary(num);
}
toBinary();