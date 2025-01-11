const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digits > button");

function displayCharacter(char, charReplacement) {
  display.textContent += !charReplacement ? char : charReplacement;
}

digitButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    displayCharacter(e.target.textContent);
  })
);
