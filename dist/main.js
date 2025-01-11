/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Cursor.js":
/*!***********************!*\
  !*** ./src/Cursor.js ***!
  \***********************/
/***/ ((module) => {

module.exports.Cursor = class {
  constructor(display) {
    this.position = 0;
    this.element = document.createElement("div");
    this.element.id = "cursor";
    display.appendChild(this.element);
  }
  render() {
    this.element.style.left = `calc(${this.position}ch + 10px)`;
    display.appendChild(this.element);
  }
  isAtStart() {
    return this.position === 0;
  }
  isAt(pos) {
    return this.position === pos;
  }
  increment(step = 1) {
    this.position += step;
    this.render();
    console.log(this.position);
  }
  decrement(step = 1) {
    this.position -= step;
    this.render();
    console.log(this.position);
  }
  moveTo(index) {
    this.position = index;
    this.render();
    console.log(this.position);
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const { Cursor } = __webpack_require__(/*! ./Cursor */ "./src/Cursor.js");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7QUN0QkEsUUFBUSxTQUFTLEVBQUUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNyQztBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1jYWxjdWxhdG9yLXByb2plY3QvLi9zcmMvQ3Vyc29yLmpzIiwid2VicGFjazovL3RvcC1jYWxjdWxhdG9yLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWNhbGN1bGF0b3ItcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cy5DdXJzb3IgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoZGlzcGxheSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmlkID0gXCJjdXJzb3JcIjtcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgY2FsYygke3RoaXMucG9zaXRpb259Y2ggKyAxMHB4KWA7XHJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG4gIGlzQXRTdGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSAwO1xyXG4gIH1cclxuICBpc0F0KHBvcykge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09IHBvcztcclxuICB9XHJcbiAgaW5jcmVtZW50KHN0ZXAgPSAxKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uICs9IHN0ZXA7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGRlY3JlbWVudChzdGVwID0gMSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiAtPSBzdGVwO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuICBtb3ZlVG8oaW5kZXgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBpbmRleDtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCB7IEN1cnNvciB9ID0gcmVxdWlyZShcIi4vQ3Vyc29yXCIpO1xyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5XCIpO1xyXG5jb25zdCBSRVBMQUNFTUVOVF9UQUJMRSA9IHsgz4A6IE1hdGguUEksIGU6IE1hdGguRSwgz4Q6IE1hdGguUEkgKiAyLCDPhjogMS42MTgwMzMsIFwiw7dcIjogXCIvXCIsIFwiw5dcIjogXCIqXCIgfTtcclxuXHJcbmNvbnN0IGN1cnNvciA9IG5ldyBDdXJzb3IoZGlzcGxheSk7XHJcblxyXG5mdW5jdGlvbiBldmFsdWF0ZVJlcGxhY2VtZW50cyh0ZXh0KSB7XHJcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFJFUExBQ0VNRU5UX1RBQkxFKSkge1xyXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZUFsbChrZXksIHZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50KHRleHQsIHNhbXBsZSkge1xyXG4gIGxldCBhcHBlYXJhbmNlcyA9IDA7XHJcbiAgZm9yIChsZXQgY2hhciBvZiB0ZXh0KSB7XHJcbiAgICBhcHBlYXJhbmNlcyArPSBjaGFyID09PSBzYW1wbGU7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBlYXJhbmNlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eSh0ZXh0KSB7XHJcbiAgcmV0dXJuICF0ZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1RoZXJlTm9MZWZ0b3ZlckJpbmFyeU9wZXJhdG9ycyh0ZXh0KSB7XHJcbiAgcmV0dXJuICF0ZXh0Lm1hdGNoKC9eW1xcK1xcLVxcXFxcXCpcXC5dfFtcXCtcXC1cXFxcXFwqXFwuXSQvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNUaGVyZU5vUmVwZWF0aW5nT3BlcmFuZHNJblJvdyh0ZXh0KSB7XHJcbiAgcmV0dXJuICF0ZXh0Lm1hdGNoKC9bXFwuXFwrXFwtXFxcXFxcKl17Mix9Lyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVGhlcmVOb1VuY2xvc2VkQnJhY2tldHModGV4dCkge1xyXG4gIHJldHVybiBjb3VudCh0ZXh0LCBcIihcIikgPT09IGNvdW50KHRleHQsIFwiKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUNoYXJhY3RlcihjaGFyKSB7XHJcbiAgZGlzcGxheS50ZXh0Q29udGVudCArPSBjaGFyO1xyXG4gIGN1cnNvci5pbmNyZW1lbnQoY2hhci5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVNYXRoZW1hdGljYWxDaGFyYWN0ZXJBdFBvc2l0aW9uKCkge1xyXG4gIGlmICghaXNFbXB0eShkaXNwbGF5LnRleHRDb250ZW50KSAmJiAhY3Vyc29yLmlzQXRTdGFydCgpKSB7XHJcbiAgICBjb25zdCBleHByID0gZGlzcGxheS50ZXh0Q29udGVudDtcclxuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBleHByLnNsaWNlKDAsIGN1cnNvci5wb3NpdGlvbiAtIDEpICsgZXhwci5zbGljZShjdXJzb3IucG9zaXRpb24pO1xyXG4gICAgaWYgKCFjdXJzb3IuaXNBdFN0YXJ0KCkpIGN1cnNvci5kZWNyZW1lbnQoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcclxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjdXJzb3IubW92ZVRvKDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0V4cHJlc3Npb25WYWxpZChleHByKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGlzVGhlcmVOb0xlZnRvdmVyQmluYXJ5T3BlcmF0b3JzKGV4cHIpICYmIGlzVGhlcmVOb1VuY2xvc2VkQnJhY2tldHMoZXhwcikgJiYgaXNUaGVyZU5vUmVwZWF0aW5nT3BlcmFuZHNJblJvdyhleHByKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2YWx1YXRlRXhwcmVzc2lvbihleHByKSB7XHJcbiAgcmV0dXJuIGV4cHI7XHJcbn1cclxuXHJcbmNvbnN0IFtzdGFydEJ1dHRvbiwgZW5kQnV0dG9uLCBsZWZ0QnV0dG9uLCByaWdodEJ1dHRvbl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gYnV0dG9uXCIpO1xyXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGN1cnNvci5tb3ZlVG8oMCk7XHJcbn0pO1xyXG5lbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjdXJzb3IubW92ZVRvKGRpc3BsYXkudGV4dENvbnRlbnQubGVuZ3RoKTtcclxufSk7XHJcbmxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoIWN1cnNvci5pc0F0U3RhcnQoKSkge1xyXG4gICAgY3Vyc29yLmRlY3JlbWVudCgpO1xyXG4gIH1cclxufSk7XHJcbnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZW5kID0gZGlzcGxheS50ZXh0Q29udGVudC5sZW5ndGggPyBkaXNwbGF5LnRleHRDb250ZW50Lmxlbmd0aCA6IDA7XHJcbiAgaWYgKCFjdXJzb3IuaXNBdChlbmQpKSB7XHJcbiAgICBjdXJzb3IuaW5jcmVtZW50KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja3NwYWNlXCIpO1xyXG5iYWNrc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZU1hdGhlbWF0aWNhbENoYXJhY3RlckF0UG9zaXRpb24pO1xyXG5cclxuY29uc3QgY2xlYXJBbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyLWFsbFwiKTtcclxuY2xlYXJBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRGlzcGxheSk7XHJcblxyXG5jb25zdCBldmFsdWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZhbHVhdGVcIik7XHJcbmV2YWx1YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV2YWx1YXRlUmVwbGFjZW1lbnRzKGRpc3BsYXkudGV4dENvbnRlbnQpO1xyXG4gIGlmIChpc0V4cHJlc3Npb25WYWxpZChleHByZXNzaW9uKSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZXZhbHVhdGVFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xyXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IHJlc3VsdDtcclxuICAgIGN1cnNvci5tb3ZlVG8oZGlzcGxheS50ZXh0Q29udGVudC5sZW5ndGgpO1xyXG4gIH0gZWxzZSBhbGVydChcIkV4cHJlc3Npb24gaXMgaW52YWxpZCFcIik7XHJcbn0pO1xyXG5cclxuY29uc3QgZGlnaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaWdpdHMgPiBidXR0b25cIik7XHJcbmNvbnN0IGJpbmFyeU9wZXJhdG9yc0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJpbmFyeS1vcGVyYXRvcnMgYnV0dG9uXCIpO1xyXG5jb25zdCBjb25zdGFudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnN0YW50cyBidXR0b25cIik7XHJcblxyXG5kaWdpdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGRpc3BsYXlDaGFyYWN0ZXIoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gIH0pXHJcbik7XHJcbmJpbmFyeU9wZXJhdG9yc0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGRpc3BsYXlDaGFyYWN0ZXIoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gIH0pXHJcbik7XHJcbmNvbnN0YW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZGlzcGxheUNoYXJhY3RlcihlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgfSlcclxuKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9