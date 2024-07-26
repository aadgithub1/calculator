const btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', () => alert('clicked')))

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