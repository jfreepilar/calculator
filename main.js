const buttons = document.querySelectorAll('button');
const display = document.getElementById('display'); // or use appropriate selector for class or ID
const numbers = document.querySelectorAll('.number');

sessionData = {
    operandOne: '',
    operator: '',
    operandTwo: ''
};


function displayLimit() {
  var display = document.getElementById("display"); // Assuming you have an element with id "display"
  if (display.textContent.length > 8) {
    let sliced = display.textContent.slice(0, 8);
    console.log(sliced);
    display.textContent = sliced; // Truncate the display to 8 characters
  }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("number")) {
            operands(button.textContent);
            secondOperand(button.textContent)
            console.log('First: ' + sessionData['operandOne'])
            console.log('Second: ' + sessionData['operandTwo'])
        } else if (button.classList.contains("operator")) {
            setOperator(button.textContent)
            console.log('Operator: ' + sessionData['operator']) 
        }  else if (button.classList.contains("equal")) {
          if (display.textContent != null) {
           calculate();
          }
        } else if (button.classList.contains("clear")) {
          location.reload();
        } else if (button.classList.contains("percentage")) {
          percentage(display.textContent);
        } else if (button.classList.contains("negative")) {
          negative(display.textContent);
        }
    });
    
});

function operands(number) {
  if (sessionData['operandTwo'] == '' && sessionData['operator'] == '' ) {
    sessionData['operandOne'] += number;
    display.textContent = sessionData['operandOne'].slice(0, 9)
    sessionData['operandOne'] = sessionData['operandOne'].slice(0, 9);
  }
}

function secondOperand (number) {
  if (sessionData['operandOne'] != '' && sessionData['operator'] != '') {
    sessionData['operandTwo'] += number;
    display.textContent = sessionData['operandTwo'].slice(0, 9)
    sessionData['operandTwo'] = sessionData['operandTwo'].slice(0, 9);
  }
}

function setOperator(input) {
  if ( sessionData['operandOne'] != '' && sessionData['operandTwo'] != '' && sessionData['operator'] != '') {
    calculate()
    sessionData['operator'] = '';
    sessionData['operator'] = input;
  } else {
    sessionData['operator'] = input;
  }
}

function formatNumber(number) {
  if (number.toString().length > 9) {
    let slicedNumber = number.toString().slice(0, 9)
    return slicedNumber;
  } else {
    return number;
  }
}

function negative (number) {
  let negValue = -1 * number
  display.textContent = negValue;
  if (sessionData['operandTwo'] == '') {
  sessionData['operandOne'] = negValue;
  } else if (sessionData['operandTwo'] !== '' && sessionData['operandOperator'] !== null) {
  sessionData['operandTwo'] = negValue;
 }
}

function percentage(number) {
  let value = number / 100;
  sessionData['operandTwo'] = value;
  display.textContent = sessionData['operandTwo'] 
  console.log(value)
}

function calculate() {
  let computation;

  // Extract operands and convert them to numbers
  const operandOne = parseFloat(sessionData['operandOne']);
  const operandTwo = parseFloat(sessionData['operandTwo']);

  switch (sessionData['operator']) {
    case "+":
      computation = operandOne + operandTwo;
      break;
    case "-":
      computation = operandOne - operandTwo;
      break;
    case "*":
      computation = operandOne * operandTwo;
      break;
    case "/":
      computation = operandOne / operandTwo;
      break;
    default:
      break;
  }

  sessionData['operandOne'] = computation;
  sessionData['operandTwo'] = '';
  display.textContent = formatNumber(sessionData['operandOne']);
  console.log('First: ' + sessionData['operandOne'])
  console.log('Second: ' + sessionData['operandTwo'])
}








  











