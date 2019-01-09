var filestream = require('fs');
var readline = require('readline-sync');
module.exports = {
    stock(obj) {
        var stk = obj.stock;
        console.log();
        for (var key in stk) {//printing the total value for each stock
            console.log(stk[key]);
            console.log("total value for " + stk[key].stockname + " is " + stk[key].numberOfShare * stk[key].price);
        }
        var total = 0;//var for adding total shares amount
        for (var key in stk) {
            total = parseInt(total) + parseInt(stk[key].numberOfShare * stk[key].price)
        }
        console.log("Total value for  stock" + total);//print total amount

        //console.log(stk[]);
    }
}
