var utility = require('../Utility/utility');
var linkedStack = require('../Datastructure/StackLine')



//var linkedStack = require('../DataStructure/StackLine');

function printAnaprimes()
{
var stackLink = new  linkedStack.StackedLink;

var utility = require('../Utility/utility');
var show = require('util');

var anaPrimes = [[]];

anaPrimes = utility.findAnaPrime(0,1000);
for(let i = 0 ; i < anaPrimes.length ; i++){
stackLink.push(anaPrimes[i]);
}

console.log();
console.log("------Initial LinkList------");
stackLink.display();
var top = stackLink.getHead();
//console.log(top);
console.log();
console.log("------Reversed LinkList------");
stackLink.displayReverse(top);
//console.log(stackLink.peek());
}
printAnaprimes();
