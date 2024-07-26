const btns = document.querySelectorAll('button')
const display = document.querySelector('h1')
const operatorSymbols = '+-*/'
let currentExpression = []
//more pseudo
btns.forEach((btn) => btn.addEventListener('click', function(click){
    if (Number.isInteger(+click.target.textContent)){
        return display.textContent += click.target.textContent
    } else if (operatorSymbols.includes(click.target.textContent)){//operator
        addToCurrentExpression(+display.textContent, click.target.textContent)//current num in display and the operator being used
        console.log(currentExpression);
    }
}))
function addToCurrentExpression(...numOrSymbol){
    currentExpression.push(numOrSymbol)
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