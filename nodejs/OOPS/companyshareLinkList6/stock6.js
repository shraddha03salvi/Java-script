/**
* @description Program for Inventory Management 
* @author shraddha
* @since 06/01/2019
**/

//require for prompting user
var prompt = require('prompt-sync')();

//require utility 
var utility = require('./utility.js');
var data= require('./stock.json');

class Account
{
    //whenever new entry occure constructor will be initialised
    constructor(arrayOfObjects,totalPrice, amount,report)
    {
        this.totalPrice = 1;
        this.amount = 0;
        this.report=[];
    }

    //buy() adding the item to the list
    buy(num)
    {
        for(var i=0;i<num;i++)
        {
            var nameRestriction=/[a-z]/ig;

            //asking user to enter the Name,number,price
            var Name = prompt("Please enter the item purchased: ");
            var number = prompt("Please enter the no of items purchased: ");
            var price = prompt("Please enter the price per item: ");

            if (nameRestriction.test(Name) && isNaN(number) != -1 && isNaN(price) != -1) 
            {
                var customer = 
                {
                    name: Name,
                    number: number,
                    price: price
                }
                //adding cutomer to list
                list.add(customer);

                //calculating totalprice
                totalPrice = parseInt(num) * parseInt(price);
                console.log("The total price of all the stocks is "+totalPrice); 

                //getting hrs,min and sec from Date and displaying time
                var date = new Date();
                var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
                console.log("The purchase time is "+time);
            }
            else
            {
                console.log("Invalid input!!");
            }
        }
    } 

    //sell()-subtract items from the list 
    sell(num)
    {
        for(var j=0;j<num;j++)
        {
            var del = prompt("Please enter the name of item you want to purchase: ");
            var result = list.indexOf(del);
            //console.log(result);
            if(result != -1)
            {
                list.removeFrom(del);
            }
        }

        //getting hrs,min and sec from Date and displaying time
        var date = new Date();
        var time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();
        console.log("The purchase time is "+time);
    }

    //printing list
    accountReport()
    {
        list.printList();     
    }
}

//creating object of utility
var list = new utility();

//creating object of class Account
var s = new Account();

var totalPrice=1;

//asking user to enter the input


var num = prompt("Please enter the total number of stocks purchased: ");

s.buy(num);
console.log(" ");
    
s.accountReport();
console.log(" ");
    
s.sell(num);
              

	
