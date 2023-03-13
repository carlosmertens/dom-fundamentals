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
