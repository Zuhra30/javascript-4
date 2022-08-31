var elForm = document.querySelector(".js-form");
var elInputText = document.querySelector("#js-inputText");
var elInputNumber = document.querySelector("#js-inputNumber");
var elMassege = document.querySelector(".js-massege");
var elMessege = document.querySelector(".js-messege");
var elBtn = document.querySelector("#js-btn");
var totalExpenses = 450000;

elForm.addEventListener("submit", function(e){
    e.preventDefault();
    var InputNumberValue = parseFloat(elInputNumber.value, 10);
    elMassege.textContent = `${elInputText.value} sizda ${InputNumberValue} so'm pul bor`;

    if(InputNumberValue >= totalExpenses){
        elMessege.textContent = `oq yo'l ${elInputText.value}`;
    }else{
        elMessege.textContent = `${elInputText.value} keyinro kelarsiz`;
    }
});

