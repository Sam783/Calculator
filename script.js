let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";

function appendToDisplay(value) {
  if (value === "=" && num1 !== "" && num2 !== "") {
    calculate();
    return;
  }
  if (value === "C") {
    clearDisplay();
    return;
  }

  if (!isNaN(value) || value === ".") {
    if (!operator) {
      num1 += value;
    } else {
      num2 += value;
    }
  } else {
    if (value !== "." && !operator) {
      operator = value;
    }
  }

  displayValue += value;
  document.querySelector("#display").value = displayValue;
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      if (parseFloat(num2) === 0) {
        alert("Error: Division by zero");
        return;
      }
      result = parseFloat(num1) / parseFloat(num2);
      break;
    case "%":
      result = parseFloat(num1) % parseFloat(num2);
      break;
    case "√":
      if (parseFloat(num2) < 0) {
        alert("Error: Square root of a negative number is not possible");
        return;
      }
      result = Math.sqrt(parseFloat(num2));
      break;
    case "±":
      if (parseFloat(num2) < 0) {
        result = parseFloat(num2) * -1;
      } else {
        result = parseFloat(num2);
      }
      break;
    default:
      alert("Error: Invalid operator");
      return;
  }
  displayValue = result.toString();
  document.querySelector("#display").value = displayValue;
  num1 = result.toString();
  num2 = "";
  operator = "";
}

function clearDisplay() {
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  document.getElementById("display").value = displayValue;
}
