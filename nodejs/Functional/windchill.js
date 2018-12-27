var rl= require('readline');
var prompt = rl.createInterface(process.stdin,process.stdout);
var utility = require('../Utility/utility.js');

prompt.question("enter the value of t",function(t)
{
prompt.question("enter the value of v",function(v)
{
    utility.windchill(t,v);
})})
