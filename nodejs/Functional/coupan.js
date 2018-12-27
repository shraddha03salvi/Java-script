var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("Enter how many coupan you want=", (num) => {
    utility.coupan(num);
})