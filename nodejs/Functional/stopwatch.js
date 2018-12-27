var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);

var utility = require('../Utility/utility.js');
prompt.question("Press 1 to start = ", (start) => {
    start = utility.time();
    if (start) {

        prompt.question("Press 2 to stop 2 = ", (stop) => {
 
           
 
                stop = utility.time();
 
               // utility.elapsedTime(start, stop);
 
                elapsed = utility.elapsedTime(start, stop);
 
            console.log("Elapsed time from start to stop = "+elapsed/1000+" seconds");
        });
    }
}
);
           
    