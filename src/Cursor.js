export default class Cursor {
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
}
