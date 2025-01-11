function displayCharacter(char, charReplacement) {
  display.textContent += !charReplacement ? char : charReplacement;
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
    displayCharacter(e.target.textContent, e.target.getAttribute("replacement"));
  })
);
constantButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    displayCharacter(e.target.textContent, e.target.getAttribute("replacement"));
  })
);
