//video 1 to 4

/*
let js = 'amazing';
console.log(50 + 654 - 143 + 1094 - 800 + 45)
let FirstName = 'AHMAD';
console.log(FirstName)
let PI = 3.45 * 55 + 60;
let PI2 = 45 + 44 - 34;
console.log(PI - PI2)
let country = 'egypt';
let containet = 'afrika';
let popolation = '90 million'
console.log(country)
console.log(containet)
console.log(popolation)
*/

// video 5

/*
let jsIsFun = true;
let jsIsboring = false;
console.log(jsIsFun)
console.log(jsIsboring)
console.log(typeof jsIsboring)
console.log(typeof 32)
console.log(typeof 'Ahmad')
jsIsFun = 'Yes!'
console.log(jsIsFun)
let year;
console.log(year)
console.log(typeof null)
*/

// video 6

/*
// let: is enable to be changed it can be emrty
let age = 16;
age = 17;
let cc;
// const: it can not be changed and it can not be empty
const name = 'Ahmad'
name = 'mohammed' //error x
const birth; //error x
// var: it is the old way to defined veribals it works like let it is not good to use
*/

/*
//video 7
// math: * = çarpma  / = bölme  2 ** 3 = 2 x 2 x 2
const now = 2025;
const ahmadAge = now - 2008;
const mamaAge = now - 1972;
console.log(ahmadAge, mamaAge)
console.log(ahmadAge * 3, mamaAge / 3)
const firstName = 'Ahmad';
const lastName = 'Alkhooly';
console.log(firstName + ' ' + lastName)
// Asigment operaters : =,+=,
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 2;  //x = x * 2 = 50
x++;     //x = x + 1 =51
x--;
console.log(x)

// comparison operators
console.log(ahmadAge < mamaAge) // >,<,>=,<=
console.log(ahmadAge >= 18)
*/

/*
const now = 2025;
const ahmadAge = now - 2008;
const mamaAge = now - 1972;
console.log(now - 2008 < now - 1972)
let x, y;
x = y = 10 - 3 + 6;
console.log(x, y)
// let avregeAge = ahmadAge + mamaAge/2 this is rong it will devide first the one in the bottom is true
let avregeAge = (ahmadAge + mamaAge) / 2
console.log(ahmadAge + '+' + mamaAge + '/2' + '=' + avregeAge)
*/
/*
const firstName = 'Ahmad';
const job = 'student';
const age = 2008;
const year = 2025;
const Ahmad = "hello I'm " + firstName + ' I am a ' + job + ' and i am ' + (year - age) + ' years old';
console.log(Ahmad)
const newAhmad = `hello I'm ${firstName} I am a ${job} and i am ${year - age} years old`
console.log(newAhmad)
console.log('Ahmad \n\
is the \n\
boos')
console.log(`Ahmad
is the
boss`) 
*/
const age = 16;
if (age >= 18) {
                         console.log('you can start driving 🚗')
} else {
                         const yearLeft = 18 - age;
                         console.log(`you are to young come back after ${yearLeft} years :)`)
}
let birthYear = 2909;
let century;
if (birthYear <= 2000) {
                         century = 20;
} else {
                         century = 21;
}
console.log(century)
// type convertion : we covert numbers to strings but we can not convert strings to number it will give us NAN and the same thing to boolean
const a = '2122';
console.log(Number(a), a)
console.log(Number('Ahmad'))
console.log(String(123), 123)