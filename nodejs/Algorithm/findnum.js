var utility = require('../Utility/utility.js');
var rl = require('readline-Sync');

function numgame() {
    var num = rl.question("enter a number between 0 t0 N-1, where N=2^n :")
    var res = utility.isPower(num);

    if (res) {
        var n = (Math.sqrt(num, 2));

        if (n % 2 == 0) {
            console.log("Think an integer between 0 and ", (num - 1));
            var toFind = utility.search(0, num);
            console.log("Your number is ", toFind);
        } else {
            console.log("Invalid input ");
        }
    }
}

numgame();