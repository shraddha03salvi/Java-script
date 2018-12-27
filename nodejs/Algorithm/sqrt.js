var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("Enter the value of c=", (c) => {
    utility.SqrtNewtonMethod(c);
})