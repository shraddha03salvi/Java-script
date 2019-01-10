//uses for prompting user
var prompt = require('prompt-sync')();

//reading a file
var data = require('./Stock.json',"utf8");

//require for file operations
var fs=require('fs');

console.log(" data-->\n",data);

class share
{
    Reliance()
        {
        console.log("Price per share in Reliance is: "+data.stock[0].price);

        var share = prompt("Please enter the number of shares you want to purchase: ");

        var total = share*data.stock[0].price
        console.log("Per Stock in "+data.stock[0].stockName+" is sold for Rs."+data.stock[0].price+" and for "+share+" shares the price would be Rs."+total);
        }

        Accenture()
        {
        console.log("Price per share in Accenture is: "+data.stock[1].price);

        var share = prompt("Please enter the number of shares you want to purchase: ");

        var total = share*data.stock[1].price;
        console.log("Per Stock in "+data.stock[1].stockName+" is sold for Rs."+data.stock[1].price+" and for "+share+" shares the price would be Rs."+total);
        }

        TCS()
        {
        console.log("Price per share TCS is: "+data.stock[2].price);

        var share = prompt("Please enter the number of shares you want to purchase: ");
        
        var total = share*data.stock[2].price
        console.log("Per Stock in "+data.stock[2].stockName+" is sold for Rs."+data.stock[2].price+" and for "+share+" shares the price would be Rs."+total);
        }

        total()
        {
        //printing total price of all three shares
        console.log("The total price of all the stocks is "+(data.stock[0].price+data.stock[1].price+data.stock[2].price));
        }
    }


function stock()
{
    var i = new share();
    //menue
    console.log("Stocks Names-->");
    console.log("1: Reliance");
    console.log("2:  Accenture");
    console.log("3: TCS");

    //asking user to enter the choice
    var choice = prompt("Please enter your choice: ");
    switch(parseInt(choice))
    {
        case 1: i.Reliance();
                break;
        case 2: i.Accentur();
                break;
        case 3: i. TCS();
                break;
        case 4: i.total();
                break;
        default:console.log("Invalid Input");
    }
}
stock();

	



