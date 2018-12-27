var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("Enter the value of a", function (a) {
    prompt.question("Enter the value of b", function (b) {
        prompt.question("Enter the value of c", function (c) {
            utility.quadratic();
            
        })
    })
})