
var rl = require('readline');
var prompts = rl.createInterface(process.stdin,process.stdout);
var utility = require('../Utility/utility.js');

prompts.question("enter the number",function(n){


   utility.Harmonic(n);




})


