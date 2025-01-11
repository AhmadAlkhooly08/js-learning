"use strict";

// Plus one leet code
// let digits = [6,3,7,0];
// var plusOne = function(digits) {
//     for(let i = digits.length -1; i >=0; i--){
//         if(digits[i] < 9){
//             digits[i] = digits[i] + 1;
//             return digits
//         }else{
//             digits[i] = 0;
//         }
//     }
//     digits.unshift(1)
//     return digits;
// };
// console.log(plusOne(digits));

// Merge Sorted Array leet code
// let nums1=[1,2,3,0,0,0];
// let nums2=[2,5,6];
// var merge = function(nums1, m, nums2, n) {
//     let len = m + n -1;
//     let p1 = m -1;
//     let p2 = n -1;
//     for(let i = len; i >= 0; i--){
//         if(p2 < 0)break;
//         if(p1>=0 && nums1[p1] > nums2[p2]){
//             nums1[i] = nums1[p1--]
//         }else{
//             nums1[i] = nums2[p2--];
//         }
//     }
//     console.log(nums1);
// };
// merge(nums1,3,nums2,3)

// Convert Sorted Array to Binary Search Tree
// let nums = [-10, -3,0, 5, 9];
// var sortedArrayToBST = function (nums) {
//     let midKeyIndex = Math.floor(nums.length / 2);
//     console.log(midKeyIndex);
//     let middle = nums.splice(midKeyIndex,1)[0];
//     nums.unshift(middle);
//     if(nums[0] > nums){
//        middle = nums.splice(midKeyIndex,1)[0];
//        nums.unshift(middle); 

//     }
//     console.log(nums);
//     for (let i = 0; i < nums.length; i++) {}
// };
// console.log(sortedArrayToBST(nums));


// working with scope 

// function calcAge(birthyear){
//     const age = 2025 - birthyear;
//     function print(){
//         let output = `Hi ${n}, You are ${age}, Born in ${birthyear}`;
//         console.log(output);
//         if(birthyear >= 2000 && birthyear <= 2010){
//             const Name = 'Alkholy';
//             var st ='how are you';
//             const str = `oh and you are millenial ${Name}`;
//             console.log(str);
//             function add(a,b){
//                 return a+b;
//             }
//             output = 'New';
//             console.log(output);
//         }
//         // console.log(str); will not be defind
//         console.log(st);
//         // console.log(add(2,3));
//     }
//     print();
//     console.log(Name); 
//     console.log(age);
// }

// const Name = 'Ahmad';
// calcAge(2008)
// Finished scope

// edabit Test

// const arr = [1.346, 1.6532, 1.8734, 1.8723];
// const minMax = function (arr){
//     let min =arr[0];
//     let max =arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//         if(arr[i] > max){
//             max = arr[i]
//         }

//     }
//     console.log(min,max);
// }
// minMax(arr);



// Hoisting and TDZ in Practice

// variabels
// console.log(nam);
// console.log(job);
// console.log(age);

var nam = 'Ahmad';
let job = 'programmer';
const age = 17;

// Functions

// console.log(dec(2,3));
// console.log(exp(6,5));
// console.log(arrow(3,4));
// function dec (a,b){
//     return a+b;
// }
// const exp= function (a,b){
//     return a+b;
// }
// var arrow = (a,b) => a+b;

// if(!shopping) delet();
// var shopping = 10;
// function delet (){
//     console.log('All products is deleted');
// } 

// // working with this keyword

// console.log(this);
// const calcAge = function(birthYear){
//     console.log(2025 - birthYear);
//     console.log(this);
// }
// calcAge(2008)
// const calcAgeArrow = birthYear =>{
//     console.log(2025 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(2010)
// var firstName = 'ismail' // The VAR method is included in the window so it will be found By Arrow Function
// const Ahmad ={
//     firstName:'Ahmad',
//     year:1987,
//     calcAge:function(){
//         console.log(this);
//         console.log(2025 - this.year);
        
//         // solution 1
//         const self = this; // we can solve it like this now it bee defind it is called with self or that
//         const millenial = function(){
//             console.log(self.year >= 1981 && self.year <= 2000);
//             // console.log(this.year >= 1981 && this.year <= 2000); //it will be undeifeind excaktly like if we use the THIS keyword in the global scope !!!but we can solve it follow in top
//         }
//         millenial();

//         // solution 2
//         const isMillenial = ()=>{
//             console.log(this.year >= 1981 && this.year <= 2000); // this solution is best because THIS keyword in the arrow function is loking to the parent and its parent calcAge so this will be the object  
//         }  
//         isMillenial();  
//     },
//     scope: () => console.log(`hy ${this.firstName}`)
// }
// Ahmad.calcAge();
// Ahmad.scope();
// const mat = {
//     year:1989,
// }

// mat.calcAge = Ahmad.calcAge // Method bawroling // And without calling the function
// mat.calcAge()

// const f = Ahmad.calcAge;
// f( )
// This keyword Always points to the object that is calling the method


// arguments keyword

const expr = function(a,b){
    console.log(arguments);
    console.log(a+b);
}
expr(3,5)

// var arro = (a,b) =>{
//     console.log(arguments);
//     return a + b ;
// }
// arro(7,4)

// Object refrense in practice

const john1 ={
    firstName:'John',
    lastName:'Alkhooly',
    age:30
}
const ne = john1;
ne.firstName = 'Ahmad'
console.log(john1);
console.log(john1);
// const beMuslim= function(Name,newname){
//     Name.firstName = newname;
//     console.log(Name);
// }
// beMuslim(john1,'Ahmad')

const john ={
    firstName:'John',
    lastName:'Alkhooly',
    age:30,
    family:['Ahmad','isa']
}

const johncopy={...john} // But this will not copy all the object if there is a nested object it will not copy it like the array is atype of a object so if we want to change anything from the array it will be changed in 2 objects

johncopy.firstName='Ahmad';

johncopy.family.push('musa')

console.log('befor:',john);
console.log('after:',johncopy); 

// But we can solve it wit deep clone 
const johnClone = structuredClone(john);// with this know we can solve the problem

johnClone.family.push('muhammed')

console.log('original:',john);
console.log('deep clone:',johnClone); 

// Destructuring Arrays

// const arr = [3,7,9];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// // insted of doing this we can do it more simple 👉

// const [x,y,z] = arr;
// console.log(x, y, z);

// const resturant ={
//     name: 'classico italyano',
//     categories:['italyen','organic','margaretta','with meat'],
//     startermenu:['bread','tea','Ayran','egg'],
//     mainMenu:['pizza','pasta','breakfest'],
//     order: function(starterindex,mainindex){
//         return[this.startermenu[starterindex],this.mainMenu[mainindex]]
//     }
// }

// let [first,second] = resturant.categories;
// const [secod, , third] = resturant.startermenu;
// console.log(first,second);
// console.log(secod,third);
// now if we want to change 2 elements place we can do it with 2 ways normally & Destructuring

// normally
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

// Destructuring
// [first,second] = [second,first]
// console.log(first,second);

// // Recieve 2 return values from a function
// const [order1,order2] = resturant.order(2,0);
// console.log(order1,order2);

// // what if we have a nested array

// const nested = [2,4,[5,1]]

// // const [f, , j] = nested;
// // console.log(f,j);

// const [i, ,[j,d]] = nested;
// console.log(i,j,d);

// // Default values
// // const [A,B,C]= [8,9];
// const [A=1,B=1,C=1]= [9];
// console.log(A,B,C); // now c will be undefiend but if we make A,B,C = 1 c will be 1 and if we remove B from the array it will be 1 also 

// Destructuring objects

const resturant2 ={
    name: 'classico italyano',
    categories:['italyen','organic','margaretta','with meat'],
    startermenu:['bread','tea','Ayran','egg'],
    mainMenu:['pizza','pasta','breakfest'],
    openhour:{
        thu:{
            open: 9,
            close: 12,
        },
        wed:{
            open:10,
            close:11,
        },
        friday:{
            open: 2,
            close: 1,
        }
    },
    order: function(starterindex,mainindex){
        return[this.startermenu[starterindex],this.mainMenu[mainindex]]
    },
    orderdelivery:function({starterindex=2,mainindex=2,time=7,adress}){
        console.log(`order recived: ${this.startermenu[starterindex]} & ${this.mainMenu[mainindex]} at ${time}'oclock to adress:${adress}`);
    },
    pasta:function(ing1,ing2,ing3){
        console.log(`Here is your deliciose 😋 pasta with ${ing1} , ${ing2} and ${ing3}`);
    }
}
// resturant2.orderdelivery({
//     starterindex:1,
//     mainindex:0,
//     time:6,
//     adress:'istanbul kartal',
// });
// resturant2.orderdelivery({
//     adress:'istanbul kartal',
// });
// const {name,startermenu,openhour} = resturant2;
// console.log(name,startermenu,openhour); 

//  if we want to change the verebiles in the object Destructuring

// const{name:resturant,startermenu:tea,openhour:hours} = resturant2;
// console.log(resturant,tea,hours);

// ⁡⁢⁢⁢resturant.menu 👈 this will be undefiend but if we give it a difault value it will not be undefiund like bellow
// const {main=[],startermenu:st=[]}= resturant2;
// console.log(main,st);

//  Mutating variabels

// let A = 123;
// let B =45;

// const obj = {a:3,b:5,c:7};

// ({A,B}=obj)
// console.log(A,B);

// // Nested objects 
// const {friday:{open,close},} = openhour;
// console.log(open,close);

// The spread operator

const arr = [5,6,7]; // now we want to add 2,3 

const badarr = [2,3,arr[0],arr[1],arr[2]]; // without the spread operator we do this
const godarr = [2,3,...arr]; //this is the spread operator 
console.log(badarr);
console.log(...godarr); //if we use the spread operator to log it it will be without the commas and brraks

const newmenu = [...resturant2.mainMenu,'kabsa'];
console.log(newmenu);

//copy array
const main = [...resturant2.startermenu]

// join 2 arrays

const combain = [...resturant2.mainMenu,...resturant2.startermenu];
console.log(combain);

// The spread operator works only on all ⁡⁢⁣⁢Iterabls⁡
// ⁡⁢⁣⁢Iterabls⁡ are: arrays,maps,strings,sets. Not objects

const str= 'Ahmad';
const letter = [...str, ' ','c'];
console.log(letter);

// ⁡⁢⁣⁢console.log(`${...str}`ss);⁡ //this does not work with spread operator because that is not the place that expect multipple values with comma but it is expekted only when we pass it to function or to knew array

// Real world example
// const ingredients = [
//     prompt('let\'s make pasta 1.first ingredient?'),
//     prompt('2.second ingredient?'),
//     prompt('3.third ingredient?'),
// ];

// console.log(ingredients);

// resturant2.pasta(...ingredients);

//spread operator with objects
const newObj = {foundIn:1980,...resturant2,founder:'Ahmad Alkhooly'}
console.log(newObj);

const copy = {...resturant2}
copy.name = 'Alkhooly';
console.log(copy.name , resturant2.name); 