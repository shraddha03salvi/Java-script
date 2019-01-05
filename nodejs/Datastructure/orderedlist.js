var utility = require('../Utility/utility.js');
var rl = require('readline-Sync');
var aLink = require('../Datastructure/LinkedList');
function linkedList()
{
let file =utility.readFile();
console.log("String read from the file: " + file);
let arr = file.split(' ');


var list = new aLink.LinkedList;

for (let i = 0; i < arr.length; i++) {
var capacity = list.addLast(arr[i]);
}

console.log("Present linked list");
list.display();

console.log("");
console.log("Sorted linked list");
list.sort();
list.display();


try{
console.log("Enter word to search: ")
var search = utility.inputread();
console.log("");
if (search == "") throw "empty";
if (list.search(search))
 {
console.log("Item Found");
console.log("Deleting the item......");
list.remove(search);++
console.log("");
console.log("Modified LinkedList: ");
list.display();
}
else {
console.log("Not Found");
console.log("Adding the item......");
list.addLast(search);
console.log("");
console.log("Modified LinkedList: ");
list.display();
}
}
catch(err){
console.log("Please Enter a non-empty String");
}
}
linkedList();
