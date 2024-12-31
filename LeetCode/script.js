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
let nums = [-10, -3,0, 5, 9];
var sortedArrayToBST = function (nums) {
    let midKeyIndex = Math.floor(nums.length / 2);
    console.log(midKeyIndex);
    let middle = nums.splice(midKeyIndex,1)[0];
    nums.unshift(middle);
    if(nums[0] > nums){
       middle = nums.splice(midKeyIndex,1)[0];
       nums.unshift(middle); 

    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {}
};
console.log(sortedArrayToBST(nums));


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

const arr = [1.346, 1.6532, 1.8734, 1.8723];
const minMax = function (arr){
    let min =arr[0];
    let max =arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }

    }
    console.log(min,max);
}
minMax(arr);



// Hoisting and TDZ in Practice

// variabels
console.log(nam);
// console.log(job);
// console.log(age);

var nam = 'Ahmad';
let job = 'programmer';
const age = 17;

// Functions

console.log(dec(2,3));
console.log(exp(6,5));
console.log(arrow(3,4));
function dec (a,b){
    return a+b;
}
const exp= function (a,b){
    return a+b;
}
var arrow = (a,b) => a+b;

if(!shopping) delet();
var shopping = 10;
function delet (){
    console.log('All products is deleted');
} 