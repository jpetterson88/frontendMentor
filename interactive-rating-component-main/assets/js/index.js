const option = document.querySelectorAll('.option input');
const button = document.querySelector('button');
const firstPage = document.querySelector('.first-page');
const secondPage = document.querySelector('.second-page');
const value = document.querySelector('.selected-option span');

let input = option[3].value;

option.forEach(number => {
  number.addEventListener('click', () => {
    input = number.value;
  });
});

button.addEventListener('click', () => {
  value.textContent = input;

  firstPage.style.display = 'none';
  secondPage.style.display = 'block';
});