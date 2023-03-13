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
const noNumberMsg = '🚫 Incorrect number!';
const lostMsg = '😿 You lost the game!';
const highMsg = '📈 Too high!';
const lowMsg = '📉 Too Low!';

// Set random secret number, score and highscore
let number = getNumber();
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
let gameOver = false;

function setMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

function getNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

function changeBackground(bodyColor, boxWidth) {
  document.querySelector('body').style.backgroundColor = bodyColor;
  document.querySelector('.number').style.width = boxWidth;
}

// Handle check button event
document.querySelector('.check').addEventListener('click', function () {
  if (!gameOver) {
    const guess = Number(document.querySelector('.guess').value);

    if (guess < 1 || guess > 20) {
      setMessage(noNumberMsg);
    } else if (guess === number) {
      if (score > highScore) highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = number;
      setMessage(winMsg);
      changeBackground('#32bf07', '30rem');
      gameOver = true;
    } else if (guess !== number) {
      score--;

      if (score < 1) {
        setMessage(lostMsg);
        document.querySelector('.score').textContent = 0;
        gameOver = true;
      } else {
        setMessage(guess > number ? highMsg : lowMsg);
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

// Handle again button event (reset states to the beginning)
document.querySelector('.again').addEventListener('click', function () {
  number = getNumber();
  score = 20;
  gameOver = false;

  document.querySelector('.number').textContent = '?';
  setMessage(initMsg);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  changeBackground('#311a1a', '15rem');
});
