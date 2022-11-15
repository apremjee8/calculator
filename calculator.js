// set variables
let previousValue = null;
let currentValue = null;
let operator = null;
let resetScreen = false;

// select DOM elements
const previousDisplay = document.querySelector(".previousDisplay");
const currentDisplay = document.querySelector(".currentDisplay");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");

// handle all the clicks
numberButtons.forEach((button) =>
  button.addEventListener("click", () => handleClick(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => handleOperator(button.textContent))
);

clearButton.addEventListener("click", clearDisplay);

equalButton.addEventListener("click", handleEqual);

decimalButton.addEventListener("click", handleDecimal);

// define functions
function clearDisplay() {
  currentDisplay.textContent = "0";
  previousDisplay.textContent = "";
  previousValue = null;
  currentValue = null;
  operator = null;
}

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue = previousValue + currentValue;
    previousValue = roundNumber(previousValue);
    return;
  }
  if (operator === "-") {
    previousValue = previousValue - currentValue;
    previousValue = roundNumber(previousValue);
    return;
  }
  if (operator === "x") {
    previousValue = previousValue * currentValue;
    previousValue = roundNumber(previousValue);
    return;
  }
  if (operator === "/") {
    previousValue = previousValue / currentValue;
    previousValue = roundNumber(previousValue);
    return;
  }
}

function handleClick(number) {
  if ((currentDisplay.textContent === "0") | resetScreen) {
    currentDisplay.textContent = "";
    resetScreen = false;
  }
  if (currentDisplay.textContent.length <= 6) {
    currentDisplay.textContent += number;
  }
}

function handleOperator(op) {
  if (previousValue) {
    currentValue = currentDisplay.textContent;
    operate();
    operator = op;
    currentDisplay.textContent = previousValue;
    previousDisplay.textContent = previousValue + " " + operator;
    resetScreen = true;
    // console.log(operator);
    return;
  }

  if (!previousValue) {
    previousValue = currentDisplay.textContent;
    operator = op;
    previousDisplay.textContent = currentDisplay.textContent + " " + op;
    currentDisplay.textContent = previousValue;
    resetScreen = true;
    return;
  }
}

function handleEqual() {
  if (previousValue) {
    currentValue = currentDisplay.textContent;
    previousDisplay.textContent =
      previousValue + " " + operator + " " + currentValue + " " + "=";
    operate();
    currentDisplay.textContent = previousValue;
    previousValue = null;
    resetScreen = true;
    return;
  } else {
    return;
  }
}

function handleDecimal() {
  if (currentDisplay.textContent.includes(".")) {
    return;
  } else {
    currentDisplay.textContent = currentDisplay.textContent + ".";
  }
}

function roundNumber(num) {
  return Math.round(num * 1000000) / 1000000;
}
