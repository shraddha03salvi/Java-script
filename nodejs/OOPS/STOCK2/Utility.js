var filestream = require('fs');
module.exports = {
    stockExpression(data)
    {
        var stock=data.stock;

        for( var key in stock)   
        {
            console.log(stock[key]);
            console.log("The total value of "+stock[key].stock_name+" is "+stock[key].Number_of_shares*stock[key].share_price);
            console.log('\n');
        }
        var newstock=0;
        for(var key in stock)
        {
           newstock=parseInt(newstock)+parseInt(stock[key].Number_of_shares*stock[key].share_price);
        }    
        console.log("The total value of all stocks are  "+newstock); 

    }

}
            