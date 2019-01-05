var utility = require('../Utility/utility.js');
var rl = require('readline-Sync');



function Merge() {
    var res = utility.fileCall();
    //var arr=['abc','xyz','aaa','bbb','ccc','hdg','hjs'];
    utility.mergeSort(res);
    console.log("Merge sorted result ", res);
}
Merge()