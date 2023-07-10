const previousScreenNumber = document.querySelector(".previous_number");
const currentScreenNumber = document.querySelector(".current_number");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', clearOperator);

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener("click", () => {
  addDecimal();
})

const equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', operate);

let currentNum = "";
let operator = "+";
let previousNum = "";

numberButton.forEach(btn => {
  btn.addEventListener("click", () => handleNumber(btn.textContent));
});

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
      previousNum = "";
      currentScreenNumber.textContent = currentNum;
    }
  if (currentNum.length <= 10) {
  currentNum += number;
  currentScreenNumber.textContent = currentNum;
  }  
}

operatorButton.forEach(btn => {
  btn.addEventListener("click", () => handleOperator(btn.textContent));
});

function handleOperator(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else {
    operate();
    operator = op;
    currentScreenNumber.textContent = "0";
    previousScreenNumber.textContent = previousNum + " " + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  previousScreenNumber.textContent = previousNum + " " + operator;
  currentScreenNumber.textContent = "0";
  currentNum = "";
}

function operate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = previousNum + currentNum;
  } else if (operator === "-") {
    previousNum = previousNum - currentNum;
  } else if (operator === "*") {
    previousNum = previousNum * currentNum;
  } else if (operator === "/") {
    if (currentNum < 0){
      currentNum = "error";
      screenInput();
      return;
    }
    previousNum /= currentNum;
  }
  previousNum = previousNum.toString();
  screenInput();
}

function roundDecimals (num) {
  return Math.round(num * 100000) / 100000; 
}

function screenInput() {
  if(previousNum.length <= 10) {
    currentScreenNumber.textContent = previousNum;
  } else {
    currentScreenNumber.textContent = previousNum.slice(0,10) + "...";
  }
  previousScreenNumber.textContent = "";
  operator = "";
  currentNum = "";
}

function clearOperator() {
  currentNum = "";
  previousNum = "";
  operator = "";
  currentScreenNumber.textContent = "0";
  previousScreenNumber.textContent = "";
}

function addDecimal() {
  if (!currentNum.includes(".")){
    currentNum += ".";
    currentScreenNumber.textContent = currentNum; 
  }
}