function displayCharacter(char) {
  display.textContent += char;
}

function removeMathematicalCharacter() {
  display.textContent = display.textContent.slice(0, -1);
}

const display = document.querySelector(".display");

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", removeMathematicalCharacter);
const clearAllButton = document.querySelector(".clear-all");
const evaluateButton = document.querySelector(".evaluate");

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
