var filestream = require('fs');
var readline = require('readline-sync');
module.exports = {
    Management(data) {

        var answer = Number(readline.question(" press \n 1. To add \n 2. To delete \n 3. To display \n 4. To print \n 5.To exit "));
        if (answer == 1) {
            this.add(data);
        }
        else if (answer == 2) {
            this.remove(data);
        }
        else if (answer == 3) {
            this.disp(data);
        }
        else if (answer == 4) {
            this.print(data);
        }
        else if (answer == 5) {
            this.exit(data);
        }
        else {
            console.log("Invalid key/input ");
        }
    },
     address_book(data)
    {
     var answer=readline.question("  Press \n 1.To add Person \n 2. To update Person  \n 3 To delete person \n 4. To display \n 5. To exit ");
     switch(answer)
     {
         case '1' : this.addPerson(data);
                    //return;
         case '2' : this.update(data);
                    //return;         
        
         case '3' : this.deleted(data);
                     //return;
         
         case '4' : this.displ(data);
                     //return; 
         case '5' : this.exit();            
     }

    },
    addPerson(data)
    {
      var firstname = readline.question(" Enter First name of person  ");
      var lastname  = readline.question(" Enter Last name of person   ");
      var contact   = readline.question(" Enter contact number of person ");
      var address   = readline.question(" Enter address of person ");
      var state     = readline.question(" Enter state of person ");
      var zip       = readline.question( " Enter zip code of person ");

      data.person.push({
          First_name : firstname,
          Last_name  : lastname,
          Contact    : contact,
          Address    : address,
          State      : state,
          Zip        : zip
      })
      filestream.writeFileSync('book.json',JSON.stringify(data));
      this.address_book(data);

    }, 
    displ(data)
    {
     console.log(data);
     this.address_book(data);
    },

   deleted(data)
   {
       var ans=readline.question("Enter the First name which you want to delete");
       if(ans==1)
       {
           for(let i=0;i<data.person.length;i++)
           {
               if(data.person[i].First_name==ans)
               {
                var index = data.person.indexOf(data.stock[i]);
                    
                data.stock.splice(index, 1);
               }
           }
           filestream.writeFileSync('Book.json', JSON.stringify(data));
        this.Management(data);
       }
       else if(ans==2)
       {
           console.log("Name is not Match")
           filestream.writeFileSync('Book.json', JSON.stringify(data));
        this.Management(data);
       }
   },
   update(data) {
    let ans = readline.question("Enter the  name of the exsting person ");
    let anss = readline.question("Enter the  number of exsting person");
    for (let i = 0; i < data.person.length; i++) {
        filestream.writeFileSync('address.json', JSON.stringify(data));
        if (data.person[i].First_name == ans || data.person[i].Contact == anss) {
            var que = readline.question("\nPrees \n 1. To update First name \n 2. To update Last name \n 3. To update contact \n 4.To update state \n 5. To update Address \n 6. To update zip \n 7. To Exit  ");
            if (que == 1) {
                let res = readline.question("Enter the new  First name of person ");
                data.person[i].First_name = res;
                return res;
            }
            else if (que == 2) {
                let res1 = readline.question("Enter the new Last name of the person  ");
                data.person[i].Last_name = res1;
                this.save(data);
            }
            else if (que == 3) {
                let res2 = readline.question("Enter the new contact number  ");
                data.person[i].Contact = res2;
                this.save(data);
                filestream.writeFileSync('Book.json', JSON.stringify(data));
            }
            else if (que == 4) {
                let res3 = readline.question("Enter the new state name ");
                data.person[i].State = res3;
                this.save(data);
            }
            else if (que == 5) {
                let res4 = readline.question(" Enter the new address ");
                data.person[i].Address = res4;
                this.save(data);;
            }
            else if (que == 6) {
                let res5 = readline.question("Enter the new zip ");
                data.person[i].Zip = res5;
                this.save(data);
            }
            else if (que == 7) {
                return;;
            }


        }
    }
   },


   exit()
    {
        process.exit();
    }
    
}