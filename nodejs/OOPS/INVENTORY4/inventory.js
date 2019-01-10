/**
* @description Program for Inventory Management 
* @author      shraddha Dhatavkar
* @since       03/01/2019
**/

//uses for handling all the file operations
var fs = require('fs');

//using prompy-sync asking user to enter the input
var prompt = require('prompt-sync')();

//read data from a json file
var data = fs.readFileSync('./inventory.json', 'utf-8');

//print data from json file
console.log("Data in a json file is\n" + data);

//for hold the object 
var arrayOfObjects = JSON.parse(data);

console.log(" ");
var totalPrice = 1;

class menu
{
    //Insert  Operation
    insert()
    {
        var nameRestriction = /[a-z]/ig;
        
        var num = prompt("Enter the value for the stock->");
        for (var i = 0; i < num; i++) 
        {
            var Name = prompt("Please enter the item you want to add: ");
            var weight = prompt("Please enter the number of  Kgs: ");
            var price = prompt("Please enter the price per Kg.: ");
            if (nameRestriction.test(Name) && isNaN(weight) != -1 && isNaN(price) != -1) 
            {
                arrayOfObjects.push({
                    stockName: Name,
                    Number: weight,
                    Price: price
                })
            }
            else 
            {
                console.log("Invalid input for name,weight and price!");
                return false;
            }
            console.log(arrayOfObjects);
            console.log("");

            //calculate total price
            totalPrice = parseInt(num) * parseInt(price);

            console.log("");

            //calculate  total price for all shares
            console.log("The total price of all the stocks is " + totalPrice);

            //writing arrayOfObjects on json file
            fs.writeFileSync('./inventory.json', JSON.stringify(arrayOfObjects), 'utf-8', function () { console.log('done') });

            //read json file after insertion
            var data = fs.readFileSync('./inventory.json', 'utf-8');
            console.log("after insertion data is" + data);
            
        }
        Management();
    }

    //Delete Operation
    delete()
    {
        // user enter product name
        var del = prompt("Please enter the name of product you want to delete from the inventory: ");
        
        //deleting item from the jason file
        for (var i = 0; i < arrayOfObjects.length; i++) 
        {
            if (del == arrayOfObjects[i].stockName) 
            {
                var index = arrayOfObjects.indexOf(arrayOfObjects[i]);
                arrayOfObjects.splice(index, 1);
            }
        }

        //printing array after deletion
        console.log("after deletion data is");
        arrayOfObjects.forEach(element => 
        {
            console.log(element);
        });

        fs.writeFileSync('./inventory.json', JSON.stringify(arrayOfObjects),'utf-8', function(err){
            if (err) throw err
            console.log('Done!');
        })
        
        Management();
    }
    exit()
    {
        process.exit();
        Management();
    }
}

function Management()
{
    var i= new menu();
    
    //printing options
    console.log("Inventory Management-->");
    console.log(" 1: Insert\n 2: Delete\n 3: Exit");

    //choosing by  user to enter the choice
    var choice = prompt("Please enter your choice: ");

    switch(parseInt(choice))
    {
        case 1: i.insert();
                break;
        case 2: i.delete();
                break;
        case 3: i.exit();
                break;
        default:console.log("Invalid Input!!");

    }
}
Management();






