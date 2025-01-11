import Cursor from "./Cursor";
const display = document.querySelector(".display");
const REPLACEMENT_TABLE = { π: Math.PI, e: Math.E, τ: Math.PI * 2, φ: 1.618033, "÷": "/", "×": "*" };

const cursor = new Cursor(display);

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
  cursor.increment(char.length);
}

function removeMathematicalCharacterAtPosition() {
  if (!isEmpty(display.textContent) && !cursor.isAtStart()) {
    const expr = display.textContent;
    display.textContent = expr.slice(0, cursor.position - 1) + expr.slice(cursor.position);
    if (!cursor.isAtStart()) cursor.decrement();
  }
}

function clearDisplay() {
  display.textContent = "";
  cursor.moveTo(0);
}

function isExpressionValid(expr) {
  return (
    isThereNoLeftoverBinaryOperators(expr) && isThereNoUnclosedBrackets(expr) && isThereNoRepeatingOperandsInRow(expr)
  );
}

function evaluateExpression(expr) {
  return expr;
}

const [startButton, endButton, leftButton, rightButton] = document.querySelectorAll(".navigation button");
startButton.addEventListener("click", () => {
  cursor.moveTo(0);
});
endButton.addEventListener("click", () => {
  cursor.moveTo(display.textContent.length);
});
leftButton.addEventListener("click", () => {
  if (!cursor.isAtStart()) {
    cursor.decrement();
  }
});
rightButton.addEventListener("click", () => {
  const end = display.textContent.length ? display.textContent.length : 0;
  if (!cursor.isAt(end)) {
    cursor.increment();
  }
});

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
    cursor.moveTo(display.textContent.length);
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
