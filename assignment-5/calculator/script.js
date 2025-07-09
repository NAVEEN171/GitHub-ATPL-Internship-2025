function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const InputChange = (e) => {
  const Input = document.getElementById("text-tab");

  Input.value = e.target.value.replace(/[^0-9+\-*/\s]/g, "");
};

const Submit = (e) => {
  const Input = document.getElementById("text-tab");
  let val = Input.value;
  let options = "";
  if (val) {
    options = val.trim().split(" ");
    let operator = "";
    let num1 = 0;
    let num2 = 0;
    let result;
    let validOperations = ["+", "-", "*", "/"];
    if (options.length == 0 || !val.trim()) {
      alert(" not a valid expression! ");
      return;
    }
    if (options.length <= 2) {
      operator = val.includes("+")
        ? "+"
        : val.includes("-")
        ? "-"
        : val.includes("/")
        ? "/"
        : val.includes("*")
        ? "*"
        : " ";

      options = val.split(`${operator}`);
      num1 = parseInt(options[0]);
      num2 = parseInt(options[1]);
    } else {
      num1 = parseInt(options[0]);
      operator = options[1];
      num2 = parseInt(options[2]);
    }

    if (operator === "+") {
      result = add(num1, num2);
    } else if (operator === "-") {
      result = subtract(num1, num2);
    } else if (operator === "*") {
      result = multiply(num1, num2);
    } else if (operator === "/") {
      result = divide(num1, num2);
    } else {
      alert("operator not allowed !");
    }
    if (result) {
      Input.value = result;
    }
  }
};

const inputSymbol = (str) => {
  let Input = document.getElementById("text-tab");
  let validOperations = ["+", "-", "*", "/"];
  let text = Input.value.split(" ");

  let oneOperator = text.find((symbol) => validOperations.includes(symbol));

  if (oneOperator) {
    alert("one symbol is allowed !");
    return;
  }
  Input.value = Input.value + " " + str + " ";
};
