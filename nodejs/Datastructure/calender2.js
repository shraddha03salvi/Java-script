var utility = require('../Utility/utility');
var show = require('util');
var linkedQueue = require('../Datastructure/QueueLine');

function calender(){

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

    if (newMonth == 2 &&  utility.leapYear(year)) days[newMonth] = 29;

    console.log("     " + months[newMonth] + " " + year);

    for (let i = 0; i < 7; i++) {
        linkedqueue.enque(day[i]);
    }
    linkedqueue.display2();

    for (let i = 0; i < d; i++) {
        linkedqueue2.enque(" ");
    }

    for (let i = 1; i <= days[newMonth]; i++) {
        linkedqueue2.enque(i);
    }

    linkedqueue2.displayCalender(d);
} catch (err) {
    console.log("Error: " + err);
}
}
calender();
