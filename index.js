const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
let firstOperand = ''
let secondOperand = ''
let operator = ''

btns.forEach((btn) => btn.addEventListener('click', function(){
    if (this.textContent == 'AC'){
        clearDisplay()
        resetExpression()
    } else if (this.textContent === '.' && display.textContent.includes('.')){
        return
    } else if (this.classList.contains('operand')){
        if (firstOperand && operator && !secondOperand && display.textContent == firstOperand){//waiting for secondOperand
            clearDisplay()
        }
        operandPressed(this)
        display.textContent += this.textContent
    } else if (this.classList.contains('operator')){
        operatorPressed(this)
    } else if (this.textContent == 'x2'){
        firstOperand = square(+display.textContent)
        setDisplay(firstOperand)
    } else{//'+/-'
        let negated = (+display.textContent * -1)
        if (display.textContent == firstOperand){
            firstOperand = negated
        } else{
            secondOperand = negated
        }
        setDisplay(negated)
    }
}))
function operandPressed(operandBtn){
    if (!operator){
        firstOperand += operandBtn.textContent
    } else secondOperand += operandBtn.textContent
}
function operatorPressed(operatorBtn){
    if (operatorBtn.textContent === '=' && (!firstOperand || !secondOperand)){
        return
    } else if (operatorBtn.textContent === '=' || (firstOperand && secondOperand && operator)){
        let result = operate(firstOperand, secondOperand, operator)
        firstOperand = result
        secondOperand = ''
        setDisplay(result)
    }
    operator = operatorBtn.textContent
}
function operate(num, num2, currentOperator){
    num = +num
    num2 = +num2
    let result = 0
    switch(currentOperator){
        case '+':
            result = add(num, num2)
            break
        case '-':
            result = subtract(num, num2)
            break
        case '*':
            result = multiply(num, num2)
            break
        case '/':
            result = divide(num, num2)
            break
    }
    if (!Number.isInteger(result)){
        return result.toFixed(5)
    }
    return result
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
    return (firstNum / secondNum)
}
function square(number){
    return Math.pow(number, 2)
}
function clearDisplay(){
    display.textContent = ''
}
function resetExpression(){
    firstOperand = ''
    secondOperand = ''
    operator = ''
}