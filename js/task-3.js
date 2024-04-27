"use strict";
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  // Очищаємо значення від пробілів по краях
  const trimmedValue = this.value.trim();
  
  // Перевіряємо, чи інпут порожній або містить лише пробіли
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});

