'use strict';

// Read text content of elemnt
const message = document.querySelector('.message').textContent;
console.log(message);

// Change text content of element
document.querySelector('.message').textContent = '🎉 You guessed it!';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;

// Read value of an input elemnt
console.log(document.querySelector('.guess').value);

// Change value of an input field
document.querySelector('.guess').value = 7;
