// Importing Calculator class
import Calculator from './calculator.js';
const calculatorContainer = document.querySelector('[data-calculator-container]');
const previousOperandTxt = document.querySelector('[data-previous-operand]');
const currentOperandTxt = document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTxt, currentOperandTxt);
calculatorContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.hasAttribute('data-number'))
        calculator.addNumber(target.innerText);
    else if (target.hasAttribute('data-operation'))
        calculator.selectOperation(target.innerText);
    else if (target.hasAttribute('data-equals'))
        calculator.calculate();
    else if (target.hasAttribute('data-clear'))
        calculator.clear();
    else if (target.hasAttribute('data-delete'))
        calculator.delete();
    calculator.render();
});
