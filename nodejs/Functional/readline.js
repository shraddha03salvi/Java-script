var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("Hello Shraddha, How are you?", function (ans) {
    utility.function() ;
    process.exit();
});