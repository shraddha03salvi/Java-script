var utility = require('../Utility/utility');
var show = require('util');
var linkedStack = require('../Datastructure/StackLine');
var linkedQueue = require('../Datastructure/QueueLine');

function calender() {
    var stackLink1 = new linkedStack.StackedLink;
    var stackLink2 = new linkedStack.StackedLink;

    var linkedqueue = new linkedQueue.QueuedLinkedList;
    var linkedqueue2 = new linkedQueue.QueuedLinkedList;

    var months = [
        "",
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // days[i] = number of days in month i
    var days = [
        0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    var day = ["S", "M", "Tu", "W", "Th", "F", "S"];

    try {
        var month = + process.argv[2];
        var year = + process.argv[3];

        var newMonth = parseInt(month);
        var newYear = parseInt(year);

        if (newMonth < 1 || newMonth > 12) throw "Month value is Invalid , Please Enter value in range 1-12"
        if (newMonth == undefined || newYear == undefined) throw "No input found"
        if (isNaN(newMonth) || isNaN(newYear)) throw "No input or String found , Please Enter a valid input";
        if (newMonth % 1 != 0 || newYear % 1 != 0) throw "Number required , Floating value found"


        var d = utility.day(newMonth, 1, newYear);

        if (newMonth == 2 && utility.isLeapYear(newYear)) days[newMonth] = 29;

        console.log("     " + months[newMonth] + " " + year);

        for (let i = 0; i < day.length; i++) {
            linkedqueue.enque(day[i]);
        }

        for (let i = 0; i < d; i++) {
            linkedqueue2.enque(" ");
        }

        for (let i = 1; i <= days[newMonth]; i++) {
            linkedqueue2.enque(i);
        }

        // var x = linkedqueue.deque();
        // console.log(x);
        for (let i = 0; i < 7; i++) {
            stackLink1.push(linkedqueue.deque());
        }
        stackLink1.displayDays();

        for (let i = 0; i < d; i++) {
            stackLink2.push(linkedqueue2.deque());
        }

        for (let i = 1; i <= days[newMonth]; i++) {
            stackLink2.push(linkedqueue2.deque());
        }

        stackLink2.reverse();
        console.log();
        stackLink2.displayCalender(d);


    } catch (err) {
        console.log("Error: " + err);
    }
}
calender();
