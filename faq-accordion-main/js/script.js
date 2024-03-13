const question = document.querySelectorAll("h2");
const text = document.querySelectorAll("p");
const image = document.querySelectorAll("svg");
console.log(image);

question.forEach((item, index) => {
  item.addEventListener("click", () => {
    const toggleText = text[index].classList.toggle("newText");
    text[index].style.display = toggleText ? "inline" : "none";
  });
});