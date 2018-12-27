var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
var readline=require('readline-sync');

function Merge(){
var res=utility.fileCall();
//var arr=['abc','xyz','aaa','bbb','ccc','hdg','hjs'];
utility.mergeSort(res);
console.log("Merge sorted result ",res);
}
Merge();l