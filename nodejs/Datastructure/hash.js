//var utility = require('../Utility/utility.js');
//var rl = require('readline-Sync');
//var ha = require('../Datastructure/hash');
//void countFre(string S)

"use strict"

var rl = require('readline-Sync');
var utility = require('../Datastructure/LinkedList');
var fs = require('fs');

/**
 * @description hashing function implementation
 * @param Array holds the final 2D array
 *
 */

function hashFunc() {
  var arr = new Array(10),
    array = [],
    arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [],
    arr5 = [],
    arr6 = [],
    arr7 = [],
    arr8 = [],
    arr9 = [],
    arr10 = [],
    arr11 = [];
  var list = new utility();

  //reading the hash.txt file into this programe
  var hash1 = fs.readFileSync('hash.txt');

  //convert string into an array
  hash1 = hash1.toString().split(" ");
  var hash = []

  for (var i = 0; i < hash1.length; i++) {
    if (hash1 != '') {
      hash.push(hash1[i]);
    }
  }

  //from - convert iterable object into array
  var arr = Array.from(hash);

  //sort the given array
  arr.sort();
  console.log(arr);
  let re = /[a-zA-Z]/g;

  var val = read("Please enter a value to search: ");
  if (isNaN() && val.search(re) == -1) {
    for (var i = 0; i < hash.length; i++) {
      //add the elements of the array into a linked list
      list.add(hash[i]);
    }
    list.printList();

    //to find the index of the given element
    var result = list.indexOf(val);

    if (result == -1) {
      console.log("Element not found!!");
      //add element to the array
      list.add(val);
      hash.push(val)
    } else {
      console.log("Element found!!");
      //remove element from the array
      list.removeElement(val);
      var cat = hash.indexOf(val);
      var cat1 = cat;
      hash.slice(cat1, 1);
    }
    array = list.printList();
    fs.writeFile('hash.txt', array, function () {
      console.log('done')
    })

    for (var j = 0; j < hash.length; j++) {
      //to determine the reminder
      var res = parseInt(hash[j]) % parseInt(hash.length);

      switch (parseInt(res)) {
        //saving reminders in respective arrays
        case 0:
          arr1.push(hash[j]);
          break;
        case 1:
          arr2.push(hash[j]);
          break;
        case 2:
          arr3.push(hash[j]);
          break;
        case 3:
          arr4.push(hash[j]);
          break;
        case 4:
          arr5.push(hash[j]);
          break;
        case 5:
          arr6.push(hash[j]);
          break;
        case 6:
          arr7.push(hash[j]);
          break;
        case 7:
          arr8.push(hash[j]);
          break;
        case 8:
          arr9.push(hash[j]);
          break;
        case 9:
          arr10.push(hash[j]);
        break;
      }
    }
  }
}