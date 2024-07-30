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
//once the user starts again, clear the display

function operandPressed(operandBtn){
    if (!operator){
        firstOperand += operandBtn.textContent
    } else secondOperand += operandBtn.textContent
}
function operatorPressed(operatorBtn){
    operator = operatorBtn.textContent
    alert(`operand 1: ${firstOperand}, operand 2: ${secondOperand}, operator: ${operator}`)
}
function operate(num, num2, operator){

}
function add(firstNum, secondNum){
    return firstNum + secondNum
}
function subtract(firstNum, secondNum){
    return firstNum - secondNum
}clear
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