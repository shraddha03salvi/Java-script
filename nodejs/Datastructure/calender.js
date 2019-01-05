var utility = require('../Utility/utility');
var show = require('util');

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

try {
    var month = +process.argv[2];
    var year = +process.argv[3];

    if (month % 1 != 0 || year % 1 != 0) throw "Number required , Floating value found"
    if (month < 1 || month > 12) throw "Month value is Invalid , Please Enter a value in range 1-12"
    if (month == undefined || year == undefined) throw "No input found"
    if (isNaN(month) || isNaN(year)) throw "No input or String found , Please Enter a value in range 1-12";
    // check for leap year
    if (month == 2 && utility.leapYear(year)) days[month] = 29;

    console.log("   " + months[month] + " " + year);
    console.log(" S  M Tu  W Th  F  S");

    // starting day
    var d = utility.day(month, 1, year);

    // print the calendar
    for (let i = 0; i < d + 1; i++) {
        show.print("   ");
    }
    for (var i = 1; i <= days[month]; i++) {
        show.print(" ", i);
        if (i < 10)
            show.print(" ");


        if (((i + d + 1) % 7 == 0) || (i == days[month])) {
            console.log(" ");
        }
    }
} catch (err) {
    console.log("Error: " + err);
}