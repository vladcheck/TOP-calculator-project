function count(text, sample) {
  let appearances = 0;
  for (let char of text) {
    appearances += char === sample;
  }
  return appearances;
}

function isEmpty(text) {
  return !text;
}

function isThereNoLeftoverBinaryOperators(text) {
  return !text.match(/[\+\-\\\*]$/);
}

function isThereNoRepeatingOperandsInRow(text) {
  return !text.match(/[\.\+\-\\\*]{2,}/);
}

function isThereNoUnclosedBrackets(text) {
  return count(text, "(") === count(text, ")");
}

function displayCharacter(char) {
  display.textContent += char;
}

function removeMathematicalCharacter() {
  display.textContent = display.textContent.slice(0, -1);
}

function clearDisplay() {
  display.textContent = "";
}

function isExpressionValid(expr) {
  return (
    isThereNoLeftoverBinaryOperators(expr) && isThereNoUnclosedBrackets(expr) && isThereNoRepeatingOperandsInRow(expr)
  );
}

const display = document.querySelector(".display");

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", removeMathematicalCharacter);
const clearAllButton = document.querySelector(".clear-all");
clearAllButton.addEventListener("click", clearDisplay);
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
