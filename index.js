const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digits > button");

digitButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
  })
);
