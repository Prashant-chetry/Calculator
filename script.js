const displaySection = document.querySelector(".display");
const calculator = document.querySelector(".content-main-calculator");
let Value;

calculator.addEventListener('click', function(event){
    let el = event.target;
    console.log(el);
    let elValue = el.value;
    console.log(elValue);
    let currentValue, currentOperator;
    
    //for AC
    if(elValue === "AC"){
        displaySection.textContent = "";
        Value = "";
    }

    //for Operations
    if(elValue === "0" || elValue === "1" || elValue === "2" || elValue === "3" || elValue === "4" || elValue === "5" || elValue === "6" || elValue === "7" || elValue === "8" || elValue === "9"){
        currentValue = elValue;

        //checks if Value is empty
        if(typeof Value === "undefined"){
            Value = currentValue;
            displaySection.textContent = Value;
        }else{
            Value += currentValue;
            displaySection.textContent = Value;
            console.log(Value);
        }
    }

    //for Operators
    if(elValue === "Add" || elValue === "Sub" || elValue === "Mult" || elValue === "Divide"){
        //checks if Value is empty and so gives an alert
        if(typeof Value === "undefined"){
            alert("Click a Number First");
        }else{
            if(elValue === "Add"){
                currentOperator = "+";
                Value += " " + currentOperator + " ";
                displaySection.textContent = Value;
            }else if(elValue === "Sub"){
                currentOperator = "-";
                Value += " " + currentOperator + " ";
                displaySection.textContent = Value;
            }else if(elValue === "Mult"){
                currentOperator = "*";
                Value += " " + currentOperator + " ";
                displaySection.textContent = Value;
            }else{
                currentOperator = "/";
                Value += " " + currentOperator + " ";
                displaySection.textContent = Value;
            }
        }
    }

    let splitValue = Value.split(" ");

    //for clicking Submit button
    if(elValue === "SUBMIT"){
        if(splitValue.length == 3){
            calculateForTwoOperator(splitValue);
        }
        else if(splitValue.length == 5){
            calculateForThreeOperator(splitValue);
        }
    }
});


//if there are two operators
function calculateForTwoOperator(arrayValue){
    let operatorOne = parseFloat(arrayValue[0]);
    let operation = arrayValue[1];
    let operatorTwo = parseFloat(arrayValue[2]);
    let resultValue;

    console.log(operation);
    switch(operation){
        case "+" : {
            resultValue = operatorOne + operatorTwo;
            displaySection.textContent = resultValue;
            Value ="";
            break;
        }
        case "-" : {
            resultValue = operatorOne - operatorTwo;
            displaySection.textContent = resultValue;
            Value ="";
            break;
        }
        case "*" : {
            resultValue = operatorOne * operatorTwo;
            displaySection.textContent = resultValue;
            Value ="";
            break;
        }
        case "/" : {
            resultValue = operatorOne / operatorTwo;
            displaySection.textContent = resultValue;
            Value ="";
            break;
        }
    }
    
}

//if there are three operators
function calculateForThreeOperator(arrayValue){
    let FirstValue = parseFloat(arrayValue[0]);
    let secondValue = parseFloat(arrayValue[2]);
    let thirdValue = parseFloat(arrayValue[4]);
    let operationOne = arrayValue[1];
    let operationTwo = arrayValue[3];
    let resultValue;

    console.log(operationOne);
    switch(operationOne){
        case "+" : {
            resultValue = FirstValue + secondValue;
            if(operationTwo === "+"){
                resultValue = resultValue + thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "-"){
                resultValue = resultValue - thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "*"){
                resultValue = resultValue * thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "/"){
                resultValue = resultValue / thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }
            break;
        }
        case "-" : {
            resultValue = FirstValue - secondValue;
            if(operationTwo === "+"){
                resultValue = resultValue + thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "-"){
                resultValue = resultValue - thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "*"){
                resultValue = resultValue * thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "/"){
                resultValue = resultValue / thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }
            break;
        }
        case "*" : {
            resultValue = FirstValue * secondValue;
            if(operationTwo === "+"){
                resultValue = resultValue + thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "-"){
                resultValue = resultValue - thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "*"){
                resultValue = resultValue * thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "/"){
                resultValue = resultValue / thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }
            break;
        }
        case "/" : {
            resultValue = FirstValue / secondValue;
            if(operationTwo === "+"){
                resultValue = resultValue + thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "-"){
                resultValue = resultValue - thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "*"){
                resultValue = resultValue * thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }else if(operationTwo === "/"){
                resultValue = resultValue / thirdValue;
                displaySection.textContent = resultValue;
                Value ="";
            }
            break;
        }
    }
    
}
