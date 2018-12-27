var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');


prompt.question("Enter value of N: ", (N) => {
    addNumber(N);
});

function addNumber(N) {
    var array = [];
    var len = parseInt(N);
    sum(len);

    function sum(len) {
        if (len > 0) {
            prompt.question("Enter element: ", (j) => {
                array.push(parseInt(j));
                len--;
                sum(len);
            });
        } else {
            utility.triples(array, N);
            process.exit();
        }
    }
}