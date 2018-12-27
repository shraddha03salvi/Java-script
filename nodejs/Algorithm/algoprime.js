var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("enter 1st range",function(n1){
    prompt.question("enter the 2nd range",function(n2){
    
        utility.print(n1,n2);
    process.exit();
    })
    })
