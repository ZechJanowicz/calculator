var input = document.querySelector('#placeholder');
var buttons = document.querySelectorAll('button.number-button');
var summary = document.querySelector('button.summary-button');


var x = getNumbers = () => {
for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        sum = input.value = input.value + event.currentTarget.value;
        allNumbers = sum.split(" "); 
        if (allNumbers.length = 3) {
            allNumbers.splice(1, 1);
        }
        return allNumbers
    })
}
}



function multiply() {
    adding = 0;
    multiplying = 1;
    dividing = 0;
    subtracting = 0;
}

function add() {
    adding = 1;
    multiplying = 0;
    dividing = 0;
    subtracting = 0;
}
function subtract() {
    subtracting = 1;
    multiplying = 0;
    adding = 0;
    dividing = 0;
}

function divide() {
    dividing = 1;
    multiplying = 0;
    adding = 0;
    subtracting = 0;
}

function total() {
    if(adding == 1) {
        result = allNumbers.reduce((a, b) => +a + +b);
        clear();
    }
    else if(multiplying == 1) {
        result = allNumbers.reduce((a, b) => +a * +b);
        clear();
    }
    else if(dividing == 1) {
        result = parseFloat(allNumbers.reduce((a, b) => +a / +b));
        clear();
    }
    else if (subtracting == 1) {
        result = allNumbers.reduce((a, b) => +a - +b);
        clear();
    }
}

function clear() {
    sum = input.value = result
}

function reset() {
    sum = input.value = null;
}

getNumbers();
