'use strict';
// Selecting Elemnts
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden')


// Rolling dice functionality
btnRoll.addEventListener('click',function(){
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random()*6 ) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
    // 3. Check for rolled 1
    let k = 0;
    if(dice != 1){
        k += dice;
        document.getElementById('current--0').textContent= k;
    }else{

    }
})
