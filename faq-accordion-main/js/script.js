const question = document.querySelectorAll("h2");
const text = document.querySelectorAll("p");
const image = document.querySelectorAll("img");

question.forEach((item, index) => {
  item.addEventListener("click", () => {
    const toggleText = text[index].classList.toggle("newText");
    text[index].style.display = toggleText ? "inline" : "none";

    const changeIcon = image[index + 1].classList.toggle("plusIcon");
    image[index + 1].src = changeIcon
      ? "./assets/images/icon-plus.svg"
      : "./assets/images/icon-minus.svg";
  });
});