//retreive the buttons value
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");
//let operator = document.getElementById("operatorList").value;
//get divs for display


let divReferinta = document.getElementById("referinta");
//initialize the numberTablou
let numberTablou = [];

//reset the application
function resetApp() {
    location.reload();
}

// function displayDivOptions() {
//     let divOptions = document.getElementById("operatori");
//     divOptions.classList.remove("operatori");
// }
//
// function displayDivinputTablou() {
//     let divInputTablou = document.getElementById("inputNumber");
//     divInputTablou.classList.remove("inputNumber");
// }
//
// function displayDivReferinta() {
//     let divReferinta = document.getElementById("referintaDiv");
//     divReferinta.classList.remove("referinta");
// }

//Get the operator
function operatorSelect() {
    let operator = document.getElementById("operatorList");

        if(operator.value !=="") {

        operator.setAttribute("disabled", "disabled");
        console.log(operator.value)
        }
        return operator.value;

}

//constructor dinamic fields for numbers
function numberInsertFields() {
    let inputFields = document.getElementById("inputNumbers");

    let field = document.createElement("input")
        field.setAttribute("type", "text")
        field.setAttribute("size","3")

        for(let i=0; i<10; i++){
           return inputFields.append(field)

        }

}
numberInsertFields()
