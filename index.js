const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
let firstOperand = ''
let secondOperand = ''
let operator = ''

btns.forEach((btn) => btn.addEventListener('click', function(){
    if (this.textContent == 'AC'){
        clearDisplay()
    } else if (this.classList.contains('operand')){
        if (firstOperand && operator && !secondOperand && display.textContent === firstOperand){
            clearDisplay()
        }
        operandPressed(this)
        display.textContent += this.textContent
    } else if (this.classList.contains('operator')){
        operatorPressed(this)
    } else if (this.textContent == 'x2'){
        //do something
    } else{
        //+/-
    }
}))
//if the user hits equals
    //display the result

function operandPressed(operandBtn){
    if (!operator){
        firstOperand += operandBtn.textContent
    } else secondOperand += operandBtn.textContent
}
function operatorPressed(operatorBtn){
    
    if (operatorBtn.textContent === '='){
        setDisplay(operate(firstOperand, secondOperand, operator))
    }
    operator = operatorBtn.textContent


    // alert(`operand 1: ${firstOperand}, operand 2: ${secondOperand}, operator: ${operator}`)
}
function operate(num, num2, currentOperator){
    num = +num
    num2 = +num2
    switch(currentOperator){
        case '+':
            return add(num, num2)
    }
}
function setDisplay(value){
    display.textContent = value
}
function add(firstNum, secondNum){
    return firstNum + secondNum
}
function subtract(firstNum, secondNum){
    return firstNum - secondNum
}
function multiply(firstNum, secondNum){
    return firstNum * secondNum
}
function divide(firstNum, secondNum){
    if (secondNum === 0){
        return 'Mhm sure'
    }
    return (firstNum / secondNum).toFixed(2)
}
function square(number){
    return Math.pow(number, 2)
}
function clearDisplay(){
    display.textContent = ''
}