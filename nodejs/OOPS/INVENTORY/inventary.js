var filestream=require('fs');
var access=require('./utility.js');
var content=filestream.readFileSync('inventory.json');
var object=JSON.parse(content);
function inventory()
{
  access.inventory(object);
}
inventory();