var utility = require('../Utility/utility');
var show = require('util');

var anaPrimes = [[],[],[],[],[],[],[],[],[],[]];


var initial = 0;
var final = 100;
for(let i=0 ; i < 10 ; i++)
{
    anaPrimes[i] = utility.findAnaPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;

console.log("---Range of Prime numbers which are Anagrams---");
console.log("");
for(let i=0 ; i<10 ; i++)
{
    show.print(start+"-"+end + " --> " + "[ " + anaPrimes[i] + " ]" );
    start = start + 100;
    end = end + 100;
    console.log();
}