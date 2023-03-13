'use strict';

/* ////////// BASIC DOM MANIPULATION 

// Read text content of elemnt
console.log(document.querySelector('.message').textContent);

// Change text content of element
document.querySelector('.message').textContent = '🎉 You guessed it!';

// Read value of an input elemnt
console.log(document.querySelector('.guess').value);

// Change value of an input field
document.querySelector('.guess').value = 7;

// Capture an event in the DOM
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) document.querySelector('.message').textContent = '🚫 No number!';
});
*/

// ///////// IMPLEMENTING THE GAME LOGIC

// Messages
const winMsg = '🎉 You guessed it!';
const noNumberMsg = '🚫 No number!';
const lostMsg = '😿 You lost the game!';
const highMsg = '📈 Too high!';
const lowMsg = '📉 Too Low!';

// Set random secret number
const number = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = number; // Hide later

// Initiate score
let score = Number(document.querySelector('.score').textContent);

// Handle check button event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = noNumberMsg;
  } else if (guess === number && score > 0) {
    document.querySelector('.message').textContent = winMsg;
  } else if (guess > number) {
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = lostMsg;
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = highMsg;
      document.querySelector('.score').textContent = score;
    }
  } else {
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = lostMsg;
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = lowMsg;
      document.querySelector('.score').textContent = score;
    }
  }
});
