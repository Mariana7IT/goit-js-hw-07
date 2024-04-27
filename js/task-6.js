"use strict";

function getRandomHexColor() {
  const colors = ['#799CD2', '#8CB9D4', '#ADE1D1', '#D1EBDE', '#8EBFA7'];
  return colors[Math.floor(Math.random() * colors.length)];
}


function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10; 
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginBottom = '10px'; 
    boxesContainer.appendChild(div);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('input[type="number"]');

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);
});

