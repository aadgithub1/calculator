const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
let firstOperand, secondOperand, operator

btns.forEach((btn) => btn.addEventListener('click', function(){
    display.textContent += this.textContent
    if (this.textContent == 'AC'){
        clear()
    }
}))
function clear(){
    display.textContent = ''
}
function operate(num, num2, operator){

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