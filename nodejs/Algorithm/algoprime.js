var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
var readline=require('readline-sync');
function prime()
{
    var res=readline.question("Enter the Range ");
    utility.prime(res);
}
prime();