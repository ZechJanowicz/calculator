var input = document.querySelector('#placeholder');
var buttons = document.querySelectorAll('button.number-button');
var summary = document.querySelector('button.summary-button');


var x = getNumbers = () => {
for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        sum = input.value = input.value + event.currentTarget.value;
        allNumbers = sum.split(" "); 
        checkedArray = allNumbers;
        console.log(sum)

        if (allNumbers.length = 3) {
            operand = allNumbers.splice(1, 1);
            console.log(operand)
        }
        return allNumbers
    })
}
}



function multiply() {
    if(checkedArray.length = 3) {
        total();
    }
}

function add() {
    if(checkedArray.length = 3) {
        total();
    }
}
function subtract() {
    if(checkedArray.length = 3) {
        total();
    }
}

function divide() {
    if(checkedArray.length = 3) {
        total();
    }
}

function total() {
    if(operand == "+") {
        result = allNumbers.reduce((a, b) => +a + +b);
        clear();
    }
    else if(operand == "*") {
        result = allNumbers.reduce((a, b) => +a * +b);
        clear();
    }
    else if(operand == "/") {
        result = parseFloat(allNumbers.reduce((a, b) => +a / +b));
        clear();
    }
    else if (operand == "-") {
        result = allNumbers.reduce((a, b) => +a - +b);
        clear();
    }
}

function clear() {
    sum = input.value = result.toPrecision(7);
     if(sum == "Infinity") {
        sum = input.value = "Error"
    }
}

function reset() {
    sum = input.value = null;
}

getNumbers();
