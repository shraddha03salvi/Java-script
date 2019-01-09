var filestream = require('fs');
var readline = require('readline-sync');
module.exports = {
    inventory(object) {
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;

        for (var key in rice) {
            console.log('\n\n');
            console.log(rice[key]);
            console.log("The total price of ", rice[key].rice_name, " is ", rice[key].weight * rice[key].price);
        }

        for (var key in wheat) {
            console.log('\n\n');
            console.log(wheat[key]);
            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }

        for (var key in pulses) {
            console.log('\n\n');
            console.log(pulses[key]);
            console.log("the total price of ", pulses[key].pulse_name, " is ", pulses[key].weight * pulses[key].price);
        }
    }
}