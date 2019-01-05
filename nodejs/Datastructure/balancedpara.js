var stackaccess=require('../DataStructure/Stack');
var rl = require('readline-Sync');
function Stack()
{
    var st= new stackaccess.Stack;
    var ans=rl.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   for(i=0;i<ans.length;i++)
   {ch=ans.charAt(i);
       if(ch=='(' || ch=='[' || ch=='{')
       {
       st.push(ch);
       }
       else{
           switch (ch)
           {
               case ')':if(st.pop()!='('){
                                return false;
                            }
               case ']' : if(st.pop()!='[')
               {
                   return false;
               }
               case '}' : if(st.pop()!='{')
               {
                   return false;
               }
           }
       }

   }
   return true;
}
var bol=Stack();


if(bol){
    console.log("String is balanced");
    
}
else{
    console.log("Not balanced");
    }
