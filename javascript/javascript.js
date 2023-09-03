var input = document.querySelector('#placeholder');
var buttons = document.querySelectorAll('button.number-button');
var summary = document.querySelector('button.summary-button');


var x = getNumbers = () => {
for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        sum = input.value = input.value + event.currentTarget.value;
        allNumbers = sum.split(/[-+*]/);     
        console.log(allNumbers)  
        return allNumbers
    })
}
}



function multiply() {
    adding = 0;
    multiplying = 1;
}

function add() {
    adding = 1;
    multiplying = 0;
}


function total() {
    if(adding == 1 && multiplying == 0) {
        result = allNumbers.reduce((a, b) => +a + +b);
        console.log(parseInt(result))
        console.log(multiplying)
        clear();
    }
    else if(multiplying == 1) {
        result = allNumbers.reduce((a, b) => +a * +b);
        console.log(parseInt(result))
        console.log(multiplying)
        clear();
    }
}

function clear() {
    sum = input.value = result
}

getNumbers();
