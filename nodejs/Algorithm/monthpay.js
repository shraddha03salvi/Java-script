var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');


prompt.question("enter the  principal loan amount",function(P){
    prompt.question("enter the year",function(Y){
        prompt.question("enter the rate",function(R){

          utility.payment(P,Y,R);
}) }) })