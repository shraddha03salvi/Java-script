// replace:

var rl=require('readline-Sync');
module.exports = {
    userInput: function () {
        var rl = require('readline');
        var prompt = rl.createInterface(process.stdin, process.stdout);
        return prompt;
    },
    /*input() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return rl;
    },*/
    arrayCall(arr) {
        var number = rl.question("Enter total number of array elements");
        console.log("Enter your Array elements");
        for (let index = 0; index < number; index++) {
            arr[index] = rl.question("")

        }
        return arr;
    },
    insertArray(arr) {
        var number = rl.question("Enter total number of array elements");
        console.log("Enter your Array elements");
        for (let index = 0; index < number; index++) {
            arr[index] = Number(rl.question(""));

        }
        return arr;
    },

    /*--------------------------------------------------------------------*/
   /*
     *@purpose :to print Two Dimensional Array,from user input elements 
     *@description :ask user to enter total number of column and row
     *convert into two Dimenstional array format and prints 
     */
    twoDarry(row, col) {
        var arr = [];
        console.log("enter elements ")
        for (let index = 0; index < row; index++) {
            arr.push([]);

            for (let index2 = 0; index2 < col; index2++) {
                arr[index][index2] = rl.question('');
            }
        }
        return arr;
    },
    /*----------------------------------------------------------------------------*/
    /* Triplets sum of zero program function*/
    triples(array, N) {
        var Count = 0;
        for (var i = 0; i < N - 2; i++) {
            for (var j = i + 1; j < N - 1; j++) {
                for (var k = j + 1; j < N; j++) {
                    if (array[i] + array[j] + array[k] === 0) {
                        Count++;
                        console.log("triplet are: " + array[i] + "," + array[j] + "," + array[k]);
                    }
                }
            }
        }
    },



    /*    ---------------------------------------------*/
    // Coupon Numbers:  total random number needed to have all distinct numbers//
    coupan(num) {
        var count = 0;
        var randomcount = 0;
        var arr = new Array(num);
        while (count < num) {
            var r = Math.round(Math.random() * 10000);
            randomcount++;
            console.log(r);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] = r && r > 0) {
                    arr[i] = parseInt(r);
                    count++;
                }
            }
        }
        console.log("Random number are=" + randomcount);
    },

    /*------------------------------------------------------*/

    /*--------------------------------------------------------------------------------------------*/
    /*Aim:Write   a   Stopwatch   Program   for   measuring   the   time   that   elapses   between

         the   start   and   end   clicks

    * @author shraddha Dhatavkar

    * @version v10.11.0

    * @since 22/12/2018

    */


    time() {

        var d = new Date();

        t = d.getTime()

        return t;

    },

    elapsedTime(start, stop) {

        var elapsed = stop - start;

        return elapsed;


    },

    /*---------------------------------------------------------------------------------------------*/
    /*Aim:Write  a program to calculate monthly  Payment 
    * @author shraddha Dhatavkar

        * @version v10.11.0

        * @since 22/12/2018

        */
    payment(P, Y, R) {
        var n = 12 * Y;
        var r = R / (12 * 100);
        var payment = (P * r) / (1 - (1 + r) ^ (-n));
        console.log("Monthly Payment is:" + payment);




    },
    /*---------------------------------------------------------------------------------*/
    // Aim: temperaturConversion :Celsius to Fahrenheit and Fahrenheit to Celsius://

    temp(celsius, fahrenheit)

    {
        const cTemp = celsius;
        const cToFahr = cTemp * 9 / 5 + 32;
        console.log("Celsius to Fahrenheit:" + celsius + "to" + cToFahr); // (°C × 9/5) + 32 = °F
        const fTemp = fahrenheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        console.log("Fahrenheit to Celsius:" + fahrenheit + "to" + celsius);


    },
    /*--------------------------------------------------------------------------*/

    /*Aim:Write  a program for   SqrtNewtonMethod

    * @author shraddha Dhatavkar

        * @version v10.11.0

        * @since 22/12/2018

        */
    SqrtNewtonMethod(c) {
        var c;

        var epsilon = 1e-15; // relative error tolerance
        var t = c; // estimate of the square root of c

        // repeatedly apply Newton update step until desired precision is achieved
        while (Math.abs(t - c / t) > epsilon * t) {
            t = (c / t + t) / 2.0;
        }
        // print out the estimate of the square root of c
        console.log(t);
    },
    /*================================================================================================================*/
    isPrime(index) {
        var n = 2;
        while (n <= index / 2) {
            if (index % n == 0) {
                return 0;
            }
            n++;
        }
        return index;
    },
/*================================================================================================================*/
prime(res) {
    for (let index = 2; index < res; index++) {
        if (this.isPrime(index)) {
            console.log(index);
            bubbleString
        }
    }
},


    /*Aim:Write  a program for prime Palindrome 

    * @author shraddha Dhatavkar

        * @version v10.11.0

        * @since 22/12/2018

        */

       palindrome(num) {
        var temp = num;
        var rem = 0,
            rev = 0;
        while (num != 0) {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
        if (temp == rev) {
            return true;
        } else {
            return false;
        }
    },
    /*======================================================================================*/


    /*Aim:The Two Strings are Anagram or not...

    * @author shraddha Dhatavkar

        * @version v10.11.0

        * @since 22/12/2018

        */

    isAnagram(str1, str2) {

        if (str1.length !== str2.length) {
            return false;
        }

        var sortStr1 = str1.split('').sort().join('');
        var sortStr2 = str2.split('').sort().join('');

        return (sortStr1 === sortStr2);
    },
    /*==============================================================================================*/

    /*Aim:write a program for prime number within range 1 to 1000.
        * @author shraddha Dhatavkar

            * @version v10.11.0

            * @since 22/12/2018

            */
    print(n1, n2) {
        var i = 0;
        var num = 0;
        //Empty String
        var primeNumbers = " ";

        for (i = n1; i <= n2; i++) {
            var counter = 0;
            for (num = i; num >= 0; num--) {
                if (i % num == 0) {
                    counter = counter + 1;
                }
            }
            if (counter == 2) {
                //Appended the Prime number to the String
                primeNumbers = primeNumbers + i + " ";
            }
        }
        console.log("Prime numbers from " + n1 + " to " + n2 + " are: ");
        console.log(primeNumbers);
    },
    /*=================================================================================*/
    /*Aim:User Input and Replace String Template “Hello <<UserName>>, How are you?” */
    function () {
        var str = "Hello Shraddha, How are you?";
        var n = ans.length;
        console.log("length is" + n);
        if (n >= 3) {
            var msg = str.replace("Shraddha", ans);
            console.log(msg);
        } else {
            console.log("length is short")
        }




    },
    /*====================================================================================*/
    /*Aim: Flip Coin and print percentage of Heads and Tails*/

    flipcoin(n) {
        var loopCount = 1;

        var result;
        var heads = 0;
        var tails;
        while (loopCount < n) {
            result = Math.random();
            if (result <= 1 / 2) {
                heads++;
            }
            loopCount++;
        }

        var percentHeads = heads / n * 100;
        var percentTails = (100 - percentHeads);
        console.log(percentHeads);
        console.log(percentTails);









    },
    /*==============================*=================================================================================*/
    //* Aim:-Leap Year

    ifLeapYear(year) {
        if (year % 4 !== 0) {
            return false;
        } else if (year % 100 !== 0) {
            return true;
        } else if (year % 400 !== 0) {
            return false;
        } else {
            return true;
        }

    },
    /*=================================================================================*/
    //Aim:Power of 2://
    Power(n) {
        if (n > 31) {
            console.log("Invalid input");
        } else {
            for (i = 0; i <= n; i++) {
                var res = (Math.pow(2, i));
            }
            console.log("result is" + " " + res);
        }
    },
    /*===========================================================================================*/
    //Aim:write program for Harmonic Number 
    Harmonic(n) {
        var harmonic = 1;

        if (n != 0) {
            for (var i = 1; i <= n; i++) {
                console.log("1/" + i)
                harmonic += 1 / i;
                console.log(harmonic);

            }
        } else {
            console.log("invalid number")
        }
    },

    //*============================================================================================================*//
   /* 
* @purpose : To genarate primeFactor numbers according to the userinput
*/

/* @description : Finding the primefactors of a given number */
primeFactor(number) {
    if (number > 0) {
    while (number % 2 == 0) {
    console.log("2 ");
    number = number / 2;
    }
    
    for (let index = 3; index * index <= number; index = index + 2) {
    while (number % index == 0) {
    console.log(index + "");
    number = number / index;
    }
    }
    if (number > 2) {
    console.log(number);
    }
    }
    },
    
    /*============================================================================================================*/
    //Aim:-(Gambler)
    // Print Number of Wins and Percentage of Win and Loss.//
    Gambler(stake, goal, trials) {
        var bets = 0; // total number of bets made
        var wins = 0; // total number of games won

        // repeat trials times
        for (var t = 0; t < trials; t++) {

            // do one gambler's ruin simulation
            var cash = stake;
            while (cash > 0 && cash < goal) {
                bets++;
                if (Math.random() < 0.5) cash++; // win $1
                else cash--; // lose $1
            }
            if (cash == goal) wins++; // did gambler go achieve desired goal?
        }

        // print results
        console.log(wins + " wins of " + trials);
        var ps = 100.0 * wins;
        var b = ps / trials;
        console.log("Percent of games won = " + 100.0 * wins / trials);
        var d = 1.0 * bets;
        var s = d / trials;
        console.log("Avg # bets = " + 1.0 * bets / trials);

    },
    /*========================================================================================*/
    //Aim:=Write a program for Distance.java//

    Dis(x2, y2) {
        var x1 = 0;
        var y1 = 0;

        console.log("X1 is " + x1);
        console.log("Y is " + y1);

        var xs = (x2 - x1);
        var ys = (y2 - y1);
        xs *= xs;
        ys *= ys;

        var distance = Math.sqrt(xs + ys);
        console.log("Result is =>" + distance);

    },
    /*===============================================================================================*/
    //Aim:-Write a program Quadratic.java to find the roots of the equation a*x*x + b*x + c. //
    quadratic() {
        var root = Math.sqrt(b * b - 4 * a * c);
        var denom = 2 * a;

        var root1 = (-b + root / denom);
        var root2 = (-b - root / denom);

        console.log("1st root:" + root1);
        console.log("2nd root:" + root2);
    },
    /*============================================================================================================*/
    // Aim:-Write a program WindChill.java that takes two double command-line arguments 
    windchill(t, v) {
        if (t > 50 || (v > 120 || v < 3)) {
            console.log("Value entered for T and V are Invalid for Formula!");
        } else {
            var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log("Temperature = " + t);
            console.log("Wind speed = " + v);
            console.log("Wind chill = " + w);
        }
    },

    /*==================================================================================================================*/
    // Aim:- write a program for  dayOfWeek static function that takes a date as input and prints the day of the week that date falls on //
    dayOfWeek(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        console.log(d0);
        var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
        if (d0 <= res.length) {
            console.log("The day falls on :" + res[d0])
        } else {
            console.log("Invalid day ")
        }
    },
    
    /*==========================================================================================================================*/
    //Aim:-Vending Machine
    vendingMachine(amount) {
        /**
         * @param amount holds the change to return
         */
        var count = 0;
        choice = 1;
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
        for (i = 0; i < arr.length; i++) {
            if (amount / arr[i] >= 1) //case1 to print 1000 notes
            {
                var result = Math.floor(amount / arr[i]);
                console.log("Number of " + arr[i] + " rs note are : " + result);
                amount = amount - result * arr[i];
                count = count + result;
            }
        }
        if (amount > 0)
            this.vendingMachine(amount);
    },
/*==============================================================================================================*/
binarySearch(res, low, high, ele) {
    var mid;
    while (high >= low) {
        mid = Math.floor(low + (high - low) / 2);
        if (res[mid] == ele) {
            return mid;
        }
        if (res[mid] > ele) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
},
/*================================================================================================================*/
bubbleforNums(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    }
    }
    }
    console.log(arr);
    return arr;
    },
  /*---------------------------------------------------------------------------------------------------------------*/
  binaryString(res, low, high, ele) {
    var mid;

    while (high >= low) {
        mid = Math.floor(low + (high - low) / 2);
        if (res[mid] == ele) {

            return mid;
        } else if (res[mid] > ele) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
},
/*
     *@purpose:to convert the binary value to the decimal 
     */
    binaryToDecimal(res) {
        var sum = 0;
        for (let i = 0; i < res.length; i++) {
            if (res[res.length - (i + 1)] === '1') {
                sum = sum + 2 ** i;
            }
        }
        return sum;

    },
    /*==================================================================================================*/
    bubbleSort(res) {

        for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res.length; j++) {
                if (res[i] > res[j]) {
                    var temp = res[i];
                    res[i] = res[j];
                    res[j] = temp;

                }
            }

        }
        return res;
    },
/*===========================================================================================================================*/
bubbleString(str) {
    var ch = str;
    for (let i = 0; i < ch.length; i++) {
        for (let j = 0; j < ch.length; j++) {
            if (ch[j] > ch[j + 1]) {
                var temp = ch[j];
                ch[j] = ch[j + 1];
                ch[j + 1] = temp;
            }
        }
    }
    return ch;
},
/*
     *@purpose :convertion of decimal value to the binary 
     *@description: take decimal value from user and conver it into the binary form
     *swap the generated nibbles and by using that binary value convert it into decimal form
     */
    toBinary(num) {

        var str = "";
        while (num > 0.99) {
            var a = Math.floor(num % 2);
            str = (a + str);
            num = num / 2;
        }
        console.log(str);
        //condition for checking 8 bit 
        while (str.length < 8) {
            str = '0' + str; // if not the add upto reqired bit. 
        }
        console.log("nibble", str);
        var ab = str.substring(0, 4); //First nibble 
        var bc = str.substring(4, 8); // second nibble
        console.log("first nibble", ab);
        console.log("second nibble", bc);
        var res = bc + ab; // swaping of nibbles 
        console.log("after the nibble swap", res);
        var rs = this.binaryToDecimal(res); // call this method to get decimal value 
        console.log(rs);
    },
/*============================================================================================================*/
tobin(num) {
    var str = "";
    while (num > 0) {
        var r = num % 2;
        var str = r + str;
        num = Math.floor(num / 2);
    }
    while (str.length < 8) {
        str = "0" + str;
    }
    return str;
},
/*=================================================================================================================*/
insertionString(str) {
    var ch = str;
    for (let i = 0; i < ch.length; i++) {
        var point = ch[i];
        var j = i - 1;
        while (j >= 0 && ch[j] > point) {
            ch[j + 1] = ch[j];
            j = j - 1;
        }
        ch[j + 1] = point;
    }
    return ch;
},
/*====================================================================================================================*/
insertion(res) {
    for (let i = 1; i < res.length; i++) {
        var point = res[i];
        var j = i - 1;
        while (j >= 0 && res[j] > point) {
            res[j + 1] = res[j];
            j = j - 1;
        }
        res[j + 1] = point;
    }
    return res;
},
/*======================================================================================================================*/
isPower(num) {
    if (num == 0)
        return false;
    while (num != 1) {
        if (num % 2 != 0) {
            return false;
        }
        num = num / 2;
    }
    return true;
},
// swap method for swaping the string charcter
swapString(str, first, last) {
    var as = '';
    var ch = [];
    ch = str.split('');
    var temp = ch[first];
    ch[first] = ch[last];
    ch[last] = temp;
    for (let index = 0; index < str.length; index++) {
        as = as + ch[index];
    }
    return as;
},
}