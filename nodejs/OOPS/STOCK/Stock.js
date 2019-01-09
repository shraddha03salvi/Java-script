var utility=require('./utility.js');
var file=require('fs');
var flag=true;
try{//for check file is exist or not.
var filedata=file.readFileSync('Stock.json','utf8');
var object=JSON.parse(filedata);//parse the string to object form
}catch(err){
    console.log("File not found ...please check your file ");
    flag=false;
}
function mainstack() {
   if(flag)
    utility.stock(object);//calling of stack method.
}
mainstack();