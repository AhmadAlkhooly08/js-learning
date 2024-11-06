"use strict";
// document.querySelector(".message").textContent = "🎉 Correct number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 7;
// console.log((document.querySelector(".guess").value = 7));
const secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secret;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // evrething comes from the user inter face is a string
  // document.querySelector(".number").textContent = guess;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Not Number";
  } else if (guess === secret) {
    document.querySelector(".message").textContent = "🎉 Correct number";
  } else if (guess > secret) {
    document.querySelector(".message").textContent = "📈 too high!";
  } else if (guess < secret) {
    document.querySelector(".message").textContent = "📉 Too low!";
  } else if (guess !== secret) {
    document.querySelector(".score").value = -1;
  }
  // if (guess < number) {
  //   document.querySelector(".message").textContent = "too low";
  // }
  // if (guess > number) {
  //   document.querySelector(".message").textContent = "too high";
  // }
  // if (guess == number) {
  //   document.querySelector(".message").textContent = "yees you got it";
  // }
});
