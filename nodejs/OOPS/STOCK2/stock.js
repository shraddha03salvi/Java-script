/**
 * purpose     :  Read the Json file having properties Details for stock with properties
 *                stockname, noOfShares, shareprice.we have to calculate total share price for
 *                every stock.
 *             
 * @description
 * @file       :  stock.js
 * @author     :  Shraddha Dhatavkar
 * @version    :  1.0
 * @since      :  4-01-19
 * 
 */
var access=require('./Utility');
var filestream=require('fs');
var content=filestream.readFileSync('stock.json');
var data=JSON.parse(content);
function stock()
{
  access.stockExpression(data);
}
stock();