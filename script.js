// script.js
let displayValue = "";

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Syntax Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

