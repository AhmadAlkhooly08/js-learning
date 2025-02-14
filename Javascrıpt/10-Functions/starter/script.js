'use strict';

// const bookings = [];
// We can add any expression to defult
// const creatFlight = function(flightNum,numPassengers =3,price=199.4 * numPassengers){ // best way 

//     // giving defult value to undefiend varibals
//         // Es5 old way
//     // numPassengers = numPassengers || 3;
//     // price = price || 199; 

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);

//     bookings.push(booking);
// }
// creatFlight('Lh345')
// creatFlight('Lh345',2)
// creatFlight('Lh345',6)
// ⁡⁢⁣⁢creatFlight('Lh345',6)⁡ //we can not pass an argument but unsted we can set it to undefenfd


const flight = 'AB243';
const passenger = {
    name: 'Ahmad',
    passaport: 234286365
}
const checkIn = function(flightNum,person){
    flightNum = 'Lh453'
    person.name = "MR." + person.name;
    if(person.passaport === 234286365){
        alert('check in')
    }else{
        alert('Wrong passport')
    }
}
// checkIn(flight,passenger)

// console.log(flight);
// console.log(passenger);⁡ // so we see with the object that when we resigned it with the function value it also changed from the original one because they are pointing to the same object in the heap heap nvmbfh

const newPassport = function(num){
    return num.passaport = Math.trunc(Math.random() * 123453348654);
}
console.log(newPassport(passenger))
checkIn(flight,passenger)