function addNumbers (num1, num2){
  return num1 + num2;
}

function subNumbers (num1, num2){
  return num1 - num2;
}

function multiplyNumbers(num1, num2){
  return num1 * num2;
}

function divideNumbers(num1, num2){
  return num1 / num2;
}

let num1 = 4;
let operator = "+";
let num2 = 5;

function operate(operator, num1, num2) {
  if (operator === "+"){
    return addNumbers(num1, num2);
  
  } else if (operator === "-"){
    return subNumbers(num1, num2);
  
  } else if (operator === "*"){
    return multiplyNumbers(num1, num2); 
  
  } else if (operator === "/"){
    return divideNumbers(num1, num2);
  
  } else {
    console.log("invalid operator");
    return null;
  }
}

let result = operate("*", 3, 3);
console.log(result);