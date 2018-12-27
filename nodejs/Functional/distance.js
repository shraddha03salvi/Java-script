var rl = require('readline');
var prompt = rl.createInterface(process.stdin,process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("Enter the value of x2",function(x2){
    prompt.question("Enter the value of y2 ",function(y2){
        utility.Dis(x2,y2);
    
    process.exit();
    })
    })