
var utility = require('../Utility/utility.js');
var rl=require('readline-Sync');
function twoDarry()
{
var col=rl.question('Enter the required column number ');
var row=rl.question('Enter the required row number ');
var res=utility.twoDarry(row,col);
console.log(res)
}
twoDarry();