const REPLACEMENT_TABLE = { π: Math.PI, e: Math.E, τ: Math.PI * 2, φ: 1.618033, "÷": "/", "×": "*" };
let cursorPosition = -1;

function evaluateReplacements(text) {
  for (let [key, value] of Object.entries(REPLACEMENT_TABLE)) {
    text = text.replaceAll(key, value);
  }
  return text;
}

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
  return !text.match(/^[\+\-\\\*\.]|[\+\-\\\*\.]$/);
}

function isThereNoRepeatingOperandsInRow(text) {
  return !text.match(/[\.\+\-\\\*]{2,}/);
}

function isThereNoUnclosedBrackets(text) {
  return count(text, "(") === count(text, ")");
}

function displayCharacter(char) {
  display.textContent += char;
  cursorPosition++;
}

function removeMathematicalCharacterAtPosition() {
  if (!isEmpty(display.textContent)) {
    const expr = display.textContent;
    display.textContent = expr.slice(0, cursorPosition) + expr.slice(cursorPosition + 1);
    cursorPosition--;
  }
}

function clearDisplay() {
  display.textContent = "";
  cursorPosition = 0;
}

function isExpressionValid(expr) {
  return (
    isThereNoLeftoverBinaryOperators(expr) && isThereNoUnclosedBrackets(expr) && isThereNoRepeatingOperandsInRow(expr)
  );
}

function evaluateExpression(expr) {
  return expr;
}

const display = document.querySelector(".display");

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", removeMathematicalCharacterAtPosition);

const clearAllButton = document.querySelector(".clear-all");
clearAllButton.addEventListener("click", clearDisplay);

const evaluateButton = document.querySelector(".evaluate");
evaluateButton.addEventListener("click", () => {
  const expression = evaluateReplacements(display.textContent);
  if (isExpressionValid(expression)) {
    const result = evaluateExpression(expression);
    display.textContent = result;
  } else alert("Expression is invalid!");
});

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
