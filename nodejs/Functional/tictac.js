var rl = require('readline');
var prompts=rl.createInterface(process.stdin,process.stdout);
function Matrix()
{
console.log("Cross Gmae "); 
var board =[[1,2,3],[4,5,6],[7,8,9]];
{
for( i=0;i<board.length;i++) 
{
for(j=1;j<board.length;j++)
(board [i][j]) }
{
console.log (" "+"|"+" "+"|"+" ");
console.log( board[0][0] +"|"+ board[0][1] +"|"+ board[0][2] );
console.log ("_"+"|"+"_"+"|"+"_");
console.log (" "+"|"+" "+"|"+" ");
console.log ( board[1][0] +"|"+ board[1][1] +"|"+ board[1][2] );
console.log ("_"+"|"+"_"+"|"+"_");
console.log (" "+"|"+" "+"|"+" ");
console.log ( board[2][0] +"|"+ board[2][1] +"|"+ board[2][2] );
console.log (" "+"|"+" "+"|"+" ");
}

prompts.question("X turn ",function (ans) {
var x;
this.row=x; 
console.log("x",x);


switch(choice){
case 1:
board =[0][1]='x';
break;
case 2:
board =[0][2]='x';
break;
case 3:
board =[0][3]='x';
break;
case 4:
board =[1][1]='x';
break;
case 5:
board =[1][2]='x';
break;
case 6:
board =[1][3]='x';
break;
case 7:
board =[2][1]='x';
break;
case 8:
board =[2][2]='x';
break;
case 9:
board =[2][3]='x';
break;
default : 
console.log("invalid choice");


}
prompts.question("y turn ",function (ans )
{

var y; 


this.row=y;
console.log("ans",ans);
this.column=y;
console.log("ans",ans);



}
)})}}
Matrix();