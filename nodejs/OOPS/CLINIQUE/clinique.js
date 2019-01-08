var file=require('fs');
var read=require('readline-sync');
var utility=require('./utility');
var filedata=file.readFileSync('clinique.json','utf8');
var dataObj=JSON.parse(filedata);