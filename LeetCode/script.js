'use strict';

// Plus one leet code
let digits = [4,3,2,1];
var plusOne = function(digits) {
    let k = "" ;
    for(let i = digits.length -1; i>=0; i--){
        k += digits[i];        
    }
    k = BigInt(k) + BigInt(1);

    let result = k.toString().split("").map(Number);
    console.log(result);
};
plusOne(digits);