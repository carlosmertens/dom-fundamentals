'use strict';

// DOM elements variables
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Logig flow variables
let currentDice = 0;

// Initial states
function initialState() {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  current0.textContent = 0;
  current1.textContent = 0;
}
initialState();

function rollDice() {
  return Math.trunc(Math.random() * 6 + 1);
}

// Handle New Game button
btnNew.addEventListener('click', initialState);

// Handle Roll Dice button
btnRoll.addEventListener('click', function () {
  currentDice = rollDice();
  current0.textContent = currentDice + Number(current0.textContent);
});

// handle Hold button
btnHold.addEventListener('click', function () {
  // TODO
});
