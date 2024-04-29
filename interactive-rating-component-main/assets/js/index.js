const option = document.querySelectorAll('.option input');
const button = document.querySelector('button');
const firstPage = document.querySelector('.first-page');
const secondPage = document.querySelector('.second-page');
const value = document.querySelector('.selected-option span');

let input = null;

option.forEach(number => {
  number.addEventListener('click', () => {
    input = number.value;
    console.log(input);
  });
});

button.addEventListener('click', () => {
  value.textContent = input;

  firstPage.style.display = 'none';
  secondPage.style.display = 'block';
});