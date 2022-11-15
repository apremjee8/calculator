// // declare variables that will be filled in
// let a, b, operand;

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b == 0) {
//     return "ERROR: Division by 0";
//   } else {
//     return a / b;
//   }
// }

// function operate(operator, a, b) {
//   if (operator === "+") {
//     return add(a, b);
//   }
//   if (operator === "-") {
//     return subtract(a, b);
//   }
//   if (operator === "*") {
//     return multiply(a, b);
//   }
//   if (operator === "/") {
//     return divide(a, b);
//   }
// }

// // make numbers  show up on display
// function clickNumber(event) {
//   if (a && !b) {
//     display.textContent = display.textContent + event.target.textContent;
//   }
//   if (!a) {
//     display.textContent = display.textContent + event.target.textContent;
//   }
// }

// function clickOperand(event) {
//   if (!a) {
//     a = display.textContent;
//     operand = event.target.textContent;
//   } else if (a && !b) {
//     b = display.textContent;
//   }
// }

// // clear the display to start over and reset all variables that store what has been clicked
// function clearDisplay() {
//   display.textContent = "";
//   a = undefined;
//   b = undefined;
//   operand = undefined;
// }

// // pick out variables from DOM
// const display = document.querySelector(".display");
// const clear = document.querySelector(".clear");
// const number = document.querySelectorAll(".number");
// const operator = document.querySelectorAll(".operand");

// // event listeners
// number.forEach((item) => {
//   item.addEventListener("click", clickNumber);
// });

// operator.forEach((item) => {
//   item.addEventListener("click", clickOperand);
// });

// clear.addEventListener("click", clearDisplay);
