function displayCharacter(char) {
  display.textContent += char;
}

const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digits > button");
const binaryOperatorsButtons = document.querySelectorAll(".binary-operators button");
const constantButtons = document.querySelectorAll(".constants button");

digitButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    displayCharacter(e.target.textContent);
  })
);
binaryOperatorsButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    displayCharacter(e.target.textContent);
  })
);
constantButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    displayCharacter(e.target.textContent);
  })
);
