'use strict';

const bookings = [];
// We can add any expression to defult
const creatFlight = function(flightNum,numPassengers =3,price=199.4 * numPassengers){ // best way 

    // giving defult value to undefiend varibals
        // Es5 old way
    // numPassengers = numPassengers || 3;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}
creatFlight('Lh345')
creatFlight('Lh345',2)
creatFlight('Lh345',6)

// ⁡⁢⁣⁢creatFlight('Lh345',6)⁡ //we can not pass an argument but unsted we can set it to undefenfd