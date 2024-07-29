const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
let firstOperand, secondOperand, currentOperator

btns.forEach((btn) => btn.addEventListener('click', function(){
    if (this.classList.contains('operand')){
        display.textContent += this.textContent
    } else if (this.classList.contains('operator')){
        if (this.textContent == '+/-'){
            return makeNegative()
         } else if (!firstOperand){
            firstOperand = +display.textContent
            this.style.opacity = '.7' //'hold button down'
            display.textContent = '' //allow user to type next operand
        } else if (!secondOperand){
            secondOperand = +display.textContent
            if (this.textContent == '='){
            evaluate()
            resetState()
            } else{ //user wants to use result as an operand, do not reset
                evaluate()
                firstOperand = +display.textContent
                this.style.opacity = '.7'
                secondOperand = ''
                display.textContent = ''
            }
        } else{ //if we have both operands
            evaluate()
            resetState()
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
    return (firstNum / secondNum).toFixed(2)
}
function square(number){
    return Math.pow(number, 2)
}