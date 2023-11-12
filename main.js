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
function numberInsertFields() {
    let inputFields = document.getElementById("inputNumbers");



        for(let i=0; i<10; i++){
            let field = document.createElement("input")
            field.setAttribute("type", "text")
            field.setAttribute("size","3")
            field.setAttribute("name", "field")
            field.setAttribute("class", "ninputfield")
            inputFields.appendChild(field)

        }

}
//calling the
numberInsertFields()
// try to get values form all elements by className/Name or anyother selector
function numberInsertFieldsSave() {
    let inptts = document.getElementsByName("field")

    for(let i=0; i<inptts.lenght; i++) {
        inptts[i].value;
        console.log(inptts[i].value)

     }
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

    switch(operator) {
        case "==":
            for(let i=0; i<tablou.length; i++) {
                if(tablou[i] == referinta) {
                    console.log(tablou)
                }
            }
            break;
        case "!=":
            //
            break;
        case "!==":
            //
            break;
        case "===":
            //
            break;
        case "<":
            //
            break;
        case ">":
            //
            break;
        case "=<":
            //
            break;
        default:
        displayErrorMessage()
    }
    // for(let i=0; i<tablou.length; i++) {
    //
    //
    //     if(tablou[i] +" "+operator+" "+referinta) {
    //
    //         for(let key in tablou[i] ) {
    //             console.log("Numbers are: " + tablou[i] )
    //         }
    //
    //     }else {
    //         displayErrorMessage();
    //     }
    // }
}