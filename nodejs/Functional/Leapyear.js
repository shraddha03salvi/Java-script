
var rl = require('readline');
var prompt = rl.createInterface(process.stdin,process.stdout);
var utility = require('../Utility/utility.js');
	
	
	prompt.question("enter the year",function(year){
		utility.ifLeapYear(year);
		console.log(utility.ifLeapYear(year));
		process.exit();
	})