"use strict";
function getRandomHexColor() {
  const colors = ['#799CD2', '#8CB9D4', '#ADE1D1', '#D1EBDE', '#8EBFA7'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10; 
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
  
    fragment.appendChild(div);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
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


// приклад алгоритму дій:
// const input = document.querySelector("input");
// const create = document.querySelector("button[data-create]");
// const destroy = document.querySelector("button[data-destroy]");
// const box = document.querySelector("#boxes");

// let sizes = 30;

// create.addEventListener("click", createMarkup);
// destroy.addEventListener("click", () => {
//   box.innerHTML = "";
//   sizes = 30;
// });


// function createMarkup() {
//   if (input.value < 1 || input.value > 100) {
//     console.log("error");
//     return;
//   }

//   createBoxes(input.value);
// }

// function createBoxes(amount) {
//   input.value = "";
//   box.innerHTML = "";
//   sizes = 30;

  
//   for (let i = 0; i < amount, i++){
//     const myBox = document.createElement("div");
//     myBox.style.width = `${sizes}px`;
//     myBox.style.height = `${height}px`;
//     myBox.style.backgroundColor = getRandomHexColor();
//     box.append(myBox);

//     sizes += 10;
//   }
  
// }