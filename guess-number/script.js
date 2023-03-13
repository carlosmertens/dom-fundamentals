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
const initMsg = '🏁 Start guessing...';
const winMsg = '🎉 You guessed it!';
const noNumberMsg = '🚫 No number!';
const lostMsg = '😿 You lost the game!';
const highMsg = '📈 Too high!';
const lowMsg = '📉 Too Low!';

// Set random secret number, score and highscore
let number = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

// Handle check button event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No guess number provided
    document.querySelector('.message').textContent = noNumberMsg;
  } else if (guess === number && score > 0) {
    // Guest wins
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = winMsg;
    document.querySelector('body').style.backgroundColor = '#32bf07';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > number) {
    // Too hight
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = lostMsg;
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = highMsg;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // Too low
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

// Handle again button event (reset states to the beginning)
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = initMsg;

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#311a1a';
  document.querySelector('.number').style.width = '15rem';
});
