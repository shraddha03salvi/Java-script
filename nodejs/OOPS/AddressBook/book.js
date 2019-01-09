/***********************************************************************************
 *  @Purpose        : Create a JSON file to demonstrate address book
 *  @file           : book.js
 *  @author         : Shraddha Dhatavkar
 *  @version        : 1.30.1
 *  @since          : 08-01-2019
 **********************************************************************************/

var utility=require('./utility.js');
var filestream=require('fs');
var content=filestream.readFileSync('Book.json');
var data=JSON.parse(content);

function address()
{
  utility.address_book(data);
}
address();