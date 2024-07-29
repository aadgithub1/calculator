const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
let firstOperand, secondOperand, currentOperator 
//more pseudo
btns.forEach((btn) => btn.addEventListener('click', function(){
    if (this.classList.contains('operand')){
        display.textContent += this.textContent
    } else if (this.classList.contains('operator')){
        if (!firstOperand){
            firstOperand = +display.textContent
            this.style.opacity = '.7'
            display.textContent = ''
        } else if (!secondOperand){
            secondOperand = +display.textContent
            evaluate()
        }
        currentOperator = this.textContent
        if (this.textContent == 'x2'){
            evaluate()
        }
    } else if (this.textContent == 'AC'){
        display.textContent = ''
        resetState()
    }
}))
function resetState(){
    firstOperand = ''
    secondOperand = ''
    currentOperator = ''
    resetBtnOpacity()
}
function resetBtnOpacity(){
    btns.forEach((btn) => btn.style.opacity = '1')
}
function evaluate(){
    resetBtnOpacity()
    switch(currentOperator){
        case '+':
            display.textContent = add(firstOperand, secondOperand)
            resetState()
            break
        case '-':
            display.textContent = subtract(firstOperand, secondOperand)
            resetState()
            break
        case '*':
            display.textContent = multiply(firstOperand, secondOperand)
            resetState()
            break
        case '/':
            display.textContent = divide(firstOperand, secondOperand)
            resetState()
            break
        case 'x2':
            display.textContent = square(firstOperand)
            resetState()
    }
}
function add(...operands){
    return operands.reduce((sum, number) => (sum + number))
}
function subtract(...operands){
    return operands.reduce((firstNum, secondNum) => (firstNum - secondNum))
}
function multiply(...operands){
    return operands.reduce((product, number) => (product * number))
}
function divide(...operands){
    return operands.reduce((firstNum, secondNum) => (firstNum / secondNum))
}
function square(number){
    return Math.pow(number, 2)
}