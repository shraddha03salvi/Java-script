/**
 * @description Program for Commercial Data Processing 
 * @author      Shraddha
 * @since       06/01/2019
 **/

"use strict"

//uses for handling all the file operations
var fs = require('fs');

//using prompy-sync asking user to enter the input
var prompt = require('prompt-sync')();

//reading file context
var data = fs.readFileSync('stock.json', 'utf-8'); //, 'utf-8', function(err,stock)

//parsing data from string to json object
var arrayOfObjects = JSON.parse(data);

class Account {
    /*Sometimes we need a "blueprint" for creating many objects of the same "type".
      Objects of the same type are created by calling the constructor function with
      the new keyword*/

    constructor(arrayOfObjects, totalPrice, amount, report) {
        this.arrayOfObjects;
        this.totalPrice = 1;
        this.amount = 0;
        this.report = [];
    }


    //buy() function Add shares of stock to account
    buy() {
        var num = prompt("Please enter the total number of stocks purchased: ");

        for (var i = 0; i < num; i++) {
            var nameRestriction = /[a-z]/ig;
            //asking user to enter inputs
            var Name = prompt("Please enter the name of stack purchased: ");
            var number = prompt("Please enter the no of item purchased: ");
            var price = prompt("Please enter the price per item: ");

            if (nameRestriction.test(Name) && isNaN(number) != -1 && isNaN(price) != -1) {
                //adding user input into the arrayOfObject
                arrayOfObjects.Person.push({
                    Stockname: Name,
                    Number: number,
                    Price: price
                })
            } else {
                console.log("Invalid input, Enter proper input!!");
            }
            var totalPrice = parseInt(num) * parseInt(price);

            console.log("The total price of all the stocks is " + JSON.stringify(totalPrice));

            console.log(arrayOfObjects);

            //writing arrayOfObject into the json file
            fs.writeFileSync('./stock.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!');
            })
        }
    }

    //sell() function subtract shares of stock to account
    sell() {
        var del = prompt("Please enter the stock name you want to purchase: ");

        //deleting item from the jason file
        for (var i = 0; i < arrayOfObjects.Person.length; i++) {
            if (del === arrayOfObjects.Person[i].Stockname) {
                console.log('deleted element', del);
                console.log('search elemetn in array: ', arrayOfObjects.Person[i].Stockname);
                arrayOfObjects.Person.splice(i, 1);
            }
        }
        console.log("after deletion data is\n", arrayOfObjects);

        fs.writeFileSync('./stock.json', JSON.stringify(arrayOfObjects), 'utf-8', function () {
            console.log('Done!');
        })
    }

    //total value of account dollars
    valueOf() {
        for (var i = 0; i < arrayOfObjects.Person.length; i++) {
           var amount = Number(arrayOfObjects.Person[i].Price) + Number(amount);
        }
        console.log("The total price of the stocks is: " + amount);
    }

    //accountReport()-print the report 
    accountReport() {
        var report = [];
        //console.log("a");
        for (var j = 0; j < arrayOfObjects.Person.length; j++) {
            report.push(arrayOfObjects.Person[j]);
        }
        console.log("The report of your stock is: " + JSON.stringify(report));
    }
}

function menu() {
    //creating object of Account class
    var s = new Account();
    var arrayOfObjects, totalPrice = 1,
        amount = 0;

    console.log("***************Welcome to stock account manager***************")
    console.log("1: Buy stock");
    console.log("2: Value of the stock");
    console.log("3: Sell stock");
    console.log("4: Stock Report");
    console.log("5: Exit");

    var choice = prompt("Please enter your choice: ");

    switch (parseInt(choice)) {
        case 1:
            s.buy();
            menu();
            break;

        case 2:
            s.valueOf();
            menu();
            break;

        case 3:
            s.sell();
            menu();
            break;

        case 4:
            s.accountReport();
            menu();
            break;

        case 5:
            console.log("Exit!!");
            break;

        default:
            console.log("Invalid Input!");
            break;
    }
}
menu();