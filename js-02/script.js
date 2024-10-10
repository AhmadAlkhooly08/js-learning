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


const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
}
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } if (avgKoalas >= 2 * avgDolphins) {
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    return console.log('No team wins...')
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);