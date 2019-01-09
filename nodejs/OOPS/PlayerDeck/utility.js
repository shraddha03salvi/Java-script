var read=require('readline-sync');
module.exports={
   
    /**
     * purpose: a method which returns all the card in mixing form. 
     */
    giveCards(){
        var suit=["♣️","♦️", "♥️", "♠️"];
        var rank=["King","Queen","Jack","Ace","2","3","4","5","6","7","8","9","10"];
        var cards=new Array();
        var n=suit.length*rank.length;
        for (let i = 0; i < suit.length; i++) {//adding of all 52 cards in array
        
            for (let j = 0; j < rank.length; j++) {
                cards.push(""+suit[i]+rank[j]);
                
            }
            
        }
        var l,temp;
        for (let index = 0; index < n; index++) {//mixing all the cards
            var l=Math.floor(Math.random()*n);
            temp=cards[l];
            cards[l]=cards[index];//swapping cards
            cards[index]=temp;
            
        }
        return cards;
    },
    /**
     * purpose     : A method to initialize deck of cards having suit ("Clubs","Diamonds", 
     *              "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", 
     *              "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method and
     *               then distribute 9 Cards to 4 Players and Print the Cards the received by 
     *               the 4 Players
     */
    deck(){
        var cards=this.giveCards();//get all cards
        var PersonCards=[[],[],[],[]];
        var x=0;
        for (let person = 0; person < 4; person++) {//distribute the cards in among four person
            for (let index = 0; index < 9; index++) {
             PersonCards[person][index]=cards[index+x]
            }
            x=x+9; 
            
        }
        console.log("The First persons cards  "+PersonCards[0].join());
        console.log("The Seconds persons cards  "+PersonCards[1].join());
        console.log("The Third persons cards  "+PersonCards[2].join());
        console.log("The Fourth persons cards  "+PersonCards[3].join());

        
    

    },
    deckExtend(){
        var que=require('./QueueLine.js');
        var playerClass=require('./player');
        var cards=this.giveCards();//array containing of cards
        var p=new playerClass.player;
        var num=read.question("How many player want to play ");
        if(isNaN(num)){
            console.log("Please enter correct inputs ");
            return;
        }
        for (let i = 0; i < num; i++) {
            p.addplayer();//add players
            
        }var playerNum=0;
        for (let index = 0; index < cards.length; index++) {
              playerNum=(index%num)+1;
            p.addCards(playerNum,cards[index]);
            
        }
        console.log("After sorting the card ");
        for (let index = 0; index < num; index++) {
            console.log();
           p.sort(index+1);
          console.log("Player "+(index+1)+" card is ");
          p.displayCards(index+1);
            
        }
    
       



    },
        
     insertionSort(arr) {
        n = arr.length;
        var ele;
        for (let i = 1; i < n; i++) {
            ele = arr[i];
            var j = i - 1;
            while (j >= 0 && arr[j] > ele) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = ele;

        }
        return arr;
    },
}