'use strict';

const elmScore0 = document.getElementById('score--0');
const elmScore1 = document.getElementById('score--1');
const elmCurrent0 = document.getElementById('current--0');
const elmCurrent1 = document.getElementById('current--1');

const elmDice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];

let current = 0;
let player = 0;
let playing = true;

// INITIAL SATES
elmScore0.textContent = 0;
elmScore1.textContent = 0;
elmDice.classList.add('hidden');

// HANDLE ROLL DICE BUTTON
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = getDice();
    if (dice !== 1) {
      current += dice;
      document.getElementById(`current--${player}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});

// HANDLE HOLD BUTTON
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[player] += current;
    player === 0
      ? (elmScore0.textContent = scores[0])
      : (elmScore1.textContent = scores[1]);

    if (scores[player] >= 100) {
      playing = false;
      elmDice.classList.add('hidden');
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

// HANDLE NEW GAME BUTTON
btnNew.addEventListener('click', initialState);

function getDice() {
  const dice = Math.trunc(Math.random() * 6 + 1);
  elmDice.src = `/pigGame/img/dice-${dice}.png`;
  elmDice.classList.remove('hidden');

  return dice;
}

function switchPlayer() {
  current = 0;
  document.getElementById(`current--${player}`).textContent = 0;
  player = player === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

function initialState() {
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--winner');
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  current = 0;
  player = 0;
  elmScore0.textContent = 0;
  elmScore1.textContent = 0;
  elmCurrent0.textContent = 0;
  elmCurrent1.textContent = 0;
  elmDice.classList.add('hidden');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
}
