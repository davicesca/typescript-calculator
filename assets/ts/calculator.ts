export default class Calculator {
    previousOperandTxt: HTMLDivElement;
    currentOperandTxt: HTMLDivElement;
    previousOperand: string; 
    currentOperand: string;
    operation: string;

    constructor(previousOperandTxt: HTMLDivElement, currentOperandTxt: HTMLDivElement) {
        this.previousOperandTxt = previousOperandTxt;
        this.currentOperandTxt = currentOperandTxt;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = '';
    }

    delete() {}

    addNumber(number: string) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand + number;
    }

    selectOperation(operation: string) {}

    calculate() {}

    render() {
        this.currentOperandTxt.innerText = this.currentOperand;
    }
}