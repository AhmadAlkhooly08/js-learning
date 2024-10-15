'use strict';
console.log("hello worrrrllldddd")
let lisen = true;
if (lisen) lisen = false;
console.log(lisen);
function logger() {
  console.log('my name is ahmad')
}

// calling \ running \ invoking function
logger();
function fruitJuce(apple, mango) {
  const juice = `our delicios juice is maked from ${apple} apples and ${mango} mangos`;
  return juice;
}
console.log(fruitJuce(3, 5));
const juice2 = fruitJuce(2, 3);
console.log(juice2)
function sayHello(name) {
  return "Hello, " + name + "!";
}
const hello = sayHello('Ahmad');
console.log(hello)

// function declaration
function calcAge1(birthyear) {
  return 2025 - birthyear;
}
const age = calcAge1(2008);

// function expression
const calcAge2 = function (birthyea2) {
  return 2024 - birthyea2;
}
const age2 = calcAge2(2006);
console.log(age, age2);
// Arrow functions
const calcage3 = Birthyear => 2024 - Birthyear;
const age3 = calcage3(1453);
console.log(age3);
// if you will use the arrow function with more than 1 line you have to use {} 
const calcretirment = (birth, Name) => {
  const age = 2024 - birth;
  const retierment = 65 - age;
  return `${Name} has ${retierment} years to be retierde`
}
console.log(calcretirment(2008, 'Ahmad'));

// clling function with another function 
function juicemachine(fruit) {
  return fruit * 3;
}
function fruitJuce2(apple, mango) {
  const applefruit = juicemachine(apple)
  const mangofruit = juicemachine(mango)
  const juice = `our delicios juice is maked from ${applefruit} pices of apples and ${mangofruit} pices of mango   mangos`;
  return juice;
}
console.log(fruitJuce2(2, 3));

const retiermentmachine = function (birth) {
  return 2024 - birth;
}
const calcretirment2 = function (birth, Name) {
  const age = retiermentmachine(birth);
  const retierment = 65 - age;
  if (retierment > 0) {
    return `${Name} has ${retierment} years to be retierde`;
  } else {
    return console.log(`${Name} has already retired`);
  }
}
console.log(calcretirment2(1951, 'Ahmad'));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    return console.log('No team wins...')
  }
}
checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

//  Arrays 
// const freind1 = 'musa';
// const freind2 = 'isa';
// const freind3 = 'osman';
// with Array we can insted doing the top thing we can do it with one line with array
const freinds = ['musa', 'isa', 'osman'];
console.log(freinds)
console.log(freinds[0])
console.log(freinds[2])
console.log(freinds.length) // .length show us th number of the values in the array and it does not start from 0
console.log(freinds[freinds.length - 2])

// in the const varibale we can cahange the elements inside it but in array we can cahnge one of the elements inside it but we can not change all of it
freinds[1] = 'omar'
console.log(freinds)
// freinds = 'omar','gtd'; we can not do this

// we can do this to
const years = new Array(1999, 1971, 2008, 1972);
console.log(years);

const firstName = 'Ahmad';
const about = [firstName, 'Alkhooly', 2024 - 2008, 'student', freinds];
console.log(about)

const cAge = function (birt) {
  return 2024 - birt;
}
const yeas = [1970, 1971, 1998, 2008];
// console.log(cAge(yeas)) we can not do this it will give us NAN


const ag1 = cAge(yeas[0]);
const ag2 = cAge(yeas[1]);
const ag3 = cAge(yeas[yeas.length - 1]);
console.log(ag1, ag2, ag3);

// we can do this with arrays insted the top thing
const all = [cAge(yeas[0]), cAge(yeas[1]), cAge(yeas[yeas.length - 1])];
console.log(all)

const fr = ['musa', 'isa', 'mostafa'];
fr.push('mohammed'); // add elements to end the Array
console.log(fr);

const frlengt = fr.push('mohammed');
console.log(frlengt); // it will give us the Array length

fr.unshift('Ahmad'); // add elements to the beginning
console.log(fr)

// remove elements
fr.pop(); // remove from last
console.log(fr)
const proped = fr.pop(); // it will note show us the length it will show us the removed element
console.log(proped)
fr.shift(); // remove from beginnig
console.log(fr)

console.log(fr.indexOf('isa')); // it will give us the index number
console.log(fr.indexOf('frfr')); // if we put an element that is not in the array it will give us -1
fr.push(23)
console.log(fr.includes('isa')); // it will say to us if the elment is in the array or not true or false
console.log(fr.includes('bob')); //false
console.log(fr.includes('23')); //it will give us false becuse it is like === if we remove the string it will be true

if (fr.includes('isa')) {
  console.log('you have a freind named isa ')
}

// code challenge

const calcTip = function (tip) {
  return tip >= 50 && tip <= 300 ? tip * 15 / 100 : tip * 20 / 100
}

const bills = [125, 155, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals);

// object
const AhmadArray = [
  'Ahmad',
  'Alkhooly',
  '2025 - 2008',
  'student',
  freinds
] // array it has to be ordered but object it does has to and it has key words insted 

const Ahmad = {
  firstName: 'Ahmad',
  LastName: 'Alkhooly',
  age: 2025 - 2008,
  job: 'student',
  freinds: freinds
}
console.log(Ahmad)
// calling data with .
console.log(Ahmad.job);
// console.log(Ahmad['job']); we can do these for calling
const key = 'Name';
console.log(Ahmad['first' + key]) // we can do these with [] not .
console.log(Ahmad['Last' + key]);

// const intrestedin = prompt('what do you know about Ahmad firstName,LastName,job,age,freinds');
// if (Ahmad[intrestedin]) {
//   console.log(Ahmad[intrestedin]);
// } else {
//   console.log('wrong request! chose between firstName,LastName,job,age,freinds')
// }

// adding data to object 
Ahmad.location = 'turkey'
Ahmad['from'] = 'egypt'
console.log(Ahmad)

console.log(`${Ahmad.firstName} has ${Ahmad.freinds.length} freinds and his best freind is ${Ahmad.freinds[1]}`);

const Ahmad2 = {
  firstName: 'Ahmad',
  LastName: 'Alkhooly',
  birth: 2008,
  job: 'student',
  freinds: freinds,
  lisens: false,
  cage: function () {
    this.toplam = 2025 - this.birth;
    return this.toplam;
  },
  driver: function () {
    return `${this.firstName} is ${this.cage()} years old ${this.job} and he has ${this.lisens ? 'a' : 'no'} driver lisens`
  }
  /*
cage: function (birth) {
  return 2025 - birth;
}
*/
  // cage: function () {
  //   console.log(this)
  //   return 2025 - this.birth;
  // }

};
console.log(Ahmad2.cage());
console.log(Ahmad2.driver());

//  code challenge
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
mark.calcBMI()
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
} else {
  console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`)

}
