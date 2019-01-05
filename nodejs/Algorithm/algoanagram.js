var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);
var utility = require('../Utility/utility.js');
prompt.question("enter the first string:", function (str1) {
    prompt.question("enter the 2nd string:", function (str2) {
        utility.isAnagram(str1, str2);

        if (utility.isAnagram(str1, str2))
            console.log("The two strings are anagram of each other");
        else
            console.log("The two strings are not anagram of each other");


    })

})