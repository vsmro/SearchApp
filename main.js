//retreive the buttons value
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");
let saveBtn = document.getElementById("saveTablou");

//let operator = document.getElementById("operatorList").value;

//initialize the numberTablou array
let numberTablou = [];

//reset the application
function resetApp() {
    location.reload();
}

//display the divs
function displayDiv() {
    let divOptions = document.getElementById("operatori");
    let divInputTablou = document.getElementById("inputNumber");
    let divReferinta = document.getElementById("referintaDiv");
    let selectOption = document.getElementById("selectOption");
    let option = selectOption.value;

    if(option === "alegeOperator") {

        divOptions.classList.remove("operatori");

    }else if(option ==="inputTablou") {

        divInputTablou.classList.remove("inputNumber");

    }else if (option ==="referinta") {

        divReferinta.classList.remove("referinta");
    }

}

//Get the operator
function operatorSelect() {
    let operator = document.getElementById("operatorList");

        if(operator.value !=="") {

        operator.setAttribute("disabled", "disabled");

        }
        return operator.value;

}

//constructor dinamic fields for numbers
// function numberInsertFields() {
//     let inputFields = document.getElementById("inputNumbers");
//
//     let field = document.createElement("input")
//         field.setAttribute("type", "text")
//         field.setAttribute("size","3")
//         inputFields.append(field)
//     console.log(inputFields)
//         for(let i=0; i<10; i++){
//            // console.log(inputFields.appendChild(field))
//
//         }
//
// }
// numberInsertFields()
// try to get values form all elements by className/Name or anyother selector
function numberInsertFieldsSave() {
    let inptts = document.getElementsByName("array[]")

    for(let i=0; i<inptts.lenght; i++) {
        let arr = inptts[i].value;
        console.log(arr)
    }
    console.log(numberTablou)
}

//display error message
function displayErrorMessage() {
    alert("No matching numbers");
}
//display the result
function displayResult() {
    let operator = operatorSelect();
    let referinta = document.getElementById("referintaInput").value;
    let tablou= [33, 44, 55, 66, 777, 90, 12, 37, 89, 1000];

    for(let i=0; i<tablou.length; i++) {

    console.log()
        if(tablou[i] +" "+operator+" "+referinta) {

            for(let key in tablou[i] ) {
                console.log("Numbers are: " + tablou[i] )
            }

        }else {
            displayErrorMessage();
        }
    }
}