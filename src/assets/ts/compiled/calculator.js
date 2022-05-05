export default class Calculator {
    constructor(previousOperandTxt, currentOperandTxt) {
        this.previousOperandTxt = previousOperandTxt;
        this.currentOperandTxt = currentOperandTxt;
        this.clear();
    }
    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = '';
    }
    delete() { }
    addNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return;
        this.currentOperand = this.currentOperand + number;
    }
    selectOperation(operation) { }
    calculate() { }
    render() {
        this.currentOperandTxt.innerText = this.currentOperand;
    }
}
