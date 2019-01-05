var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');

prompt.question("enter the  celsius", function (celsius) {
    prompt.question("enter the fahrenheit", function (fahrenheit) {
        utility.temp(celsius, fahrenheit);
    })
})