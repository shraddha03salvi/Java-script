var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("$ stake", function (stake) {
    prompt.question("$goal ", function (goal) {
        prompt.question(" $ trials", function (trials) {
            utility.Gambler(stake,goal,trials);
             })
    })
})