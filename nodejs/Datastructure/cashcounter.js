var utility = require('../Utility/utility.js');
var rl = require('readline-Sync');
var qNew  = require('./Queue');



var queue = new qNew.Queue;

console.log("Enter number of customers: ");
var customers =utility.inputread();

if(maintainCash(customers))
		{   
            console.log("");
			console.log("Cash Counter Status: ");
			console.log("Cash Balanced");
		}
		else
		{   
            console.log("");
			console.log("Cash Counter Status: ");
			console.log("Cash is not balanced");
		}


function maintainCash(customers)
{
	
	var cash = 0,amount=0;
	

	while(customers > 0)
	{  
		console.log("Press D for Deposit and W for withdrawal");
		if(utility.inputread() == 'D')
		{
			console.log("Enter a amount to deposit: ");
			amount = utility.inputread();
			queue.enqueue(amount);
			cash = Number(cash) + Number(amount);
			
		}
		else
			//if(sc.next().charAt(0) == 'W')
			{
				console.log("Enter a amount to Withdraw: ");
				amount =utility.inputread();
				queue.enqueue(amount);
				cash = Number(cash) - Number(amount);
				
			}
		customers--;
		queue.dequeue();
	}
	if(cash < 0)
	{
		console.log("Cash Underflowed by "+cash +" Rupees");
	}
	
	if(cash > 0)
	{
		console.log("Cash Overflowed by "+cash +" Rupees");
	}
	
	if(cash == 0)
	{
		console.log("No cash Available");
		return true;
	}
	return false;
}
