'use strict';

const elmScore0 = document.getElementById('score--0');
const elmScore1 = document.getElementById('score--1');
const elmCurrent0 = document.getElementById('current--0');
const elmCurrent1 = document.getElementById('current--1');

const elmDice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// INITIAL SATES
elmScore0.textContent = 0;
elmScore1.textContent = 0;
elmDice.classList.add('hidden');

// HANDLE NEW GAME BUTTON
btnNew.addEventListener('click', initialState);

// HANDLE ROLL DICE BUTTON
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  elmDice.classList.remove('hidden');
  elmDice.src = `/pigGame/img/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    elmCurrent0.textContent = currentScore;
  } else {
    // Change player
    console.log('Change player');
    elmCurrent0.textContent = 0;
  }
});

// HANDLE HOLD BUTTON
btnHold.addEventListener('click', function () {
  // TODO
});

function initialState() {
  elmScore0.textContent = 0;
  elmScore1.textContent = 0;
  elmDice.classList.add('hidden');
  elmCurrent0.textContent = 0;
  elmCurrent1.textContent = 0;
  currentScore = 0;
}
