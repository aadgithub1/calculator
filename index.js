const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
let firstOperand, secondOperand, currentOperator

btns.forEach((btn) => btn.addEventListener('click', function(){
    if (this.classList.contains('operand')){
        display.textContent += this.textContent
    } else if (this.classList.contains('operator')){
        if (!firstOperand){
            if (this.textContent == '+/-'){
                return makeNegative()
             }
            firstOperand = +display.textContent
            this.style.opacity = '.7'
            display.textContent = ''
        } else if (!secondOperand){
            secondOperand = +display.textContent
            evaluate()
            resetState()
            //if we are using a result as an operand (if there is an operator and nothing else) first operand is display, reset display
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
//the problem:

//set the result as the first operand

//AND us the key that was just pressed (the new operator) as the current operator to be used with the new first operand (result of last calculation)
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
            break
        case '-':
            display.textContent = subtract(firstOperand, secondOperand)
            break
        case '*':
            display.textContent = multiply(firstOperand, secondOperand)
            break
        case '/':
            display.textContent = divide(firstOperand, secondOperand)
            break
        case 'x2':
            display.textContent = square(firstOperand)
            break
    }
}
function makeNegative(){
    resetBtnOpacity()
    if (display.textContent[0] == '-'){
        display.textContent = display.textContent.slice(1)
    }else {
        display.textContent = `-${display.textContent}`
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