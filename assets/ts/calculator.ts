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

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    addNumber(number: string) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand + number;
    }

    selectOperation(operation: string) {
        if(!this.currentOperand && !this.previousOperand) {
            this.currentOperand = '0';
        } else if(!this.currentOperand) {
            this.operation = operation;
            return;
        } else {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate() {
        let calculation: number;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return;

        switch(this.operation) {
            case '+':
                calculation = prev + current;
            break;
            case '-':
                calculation = prev - current;
            break;
            case '*':
                calculation = prev * current;
            break;
            case '÷':
                calculation = prev / current;
            break;            
            default:
                return;
        }

        this.previousOperand = '';
        this.currentOperand = calculation.toString();
        this.operation = '';
    }

    getRenderedNumber(number: string) {
        const integerDigits = parseFloat(number.split('.')[0]);
        const decimalDigits = number.split('.')[1];

        let renderedInteger: string;
        if(integerDigits) 
            renderedInteger = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        else
            renderedInteger = '';

        if(decimalDigits != null)
            return `${renderedInteger}.${decimalDigits}`;
        else
            return renderedInteger;
    }

    render() {
        this.currentOperandTxt.innerText = this.getRenderedNumber(this.currentOperand);
        if(this.operation) {
            this.previousOperandTxt.innerText = `${this.getRenderedNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTxt.innerText = '';
        }
    }
}