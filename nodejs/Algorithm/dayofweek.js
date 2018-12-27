
var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');

function dayOfWeek(){
var day=+process.argv[2];
var month=+process.argv[3];
var year=+process.argv[4];
utility.dayOfWeek(day,month,year);

}
dayOfWeek();
