'use strict';
const img =[
    'dice-1.png',
    'dice-2.png',
    'dice-3.png',
    'dice-4.png',
    'dice-5.png',
    'dice-6.png'
];
document.querySelector('.btn--roll').addEventListener('click',function(){
        const mat = Math.floor(Math.random() * img.length)
        document.querySelector('.dice').src = img[mat];
        document.querySelector('.score').textContent= mat+1;
})