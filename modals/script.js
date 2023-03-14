'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModel = document.querySelectorAll('.show-modal');

function openModel() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

// Iterate an array of selected elements
for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', openModel);
}

// Keypress event (keydown, keypress and keyup)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});
