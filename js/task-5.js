"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});

// function getRandomColor() {
//   const colors = ['#799CD2', '#8CB9D4', '#ADE1D1', '#D1EBDE', '#8EBFA7'];
//   return colors[Math.floor(Math.random() * colors.length)];
// }


// const body = document.body;
// const colorSpan = document.querySelector('.color');
// const changeColorButton = document.querySelector('.change-color');


// changeColorButton.addEventListener('click', function() {

//   const randomColor = getRandomColor();


//   body.style.backgroundColor = randomColor;


//   colorSpan.textContent = randomColor;
// });