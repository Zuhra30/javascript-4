var elForm = document.querySelector(".js-form");
var elInput = document.querySelector("#js-exampleInputNumber1");
var elCurrencySelect = document.querySelector("#js-currency");
var elMassege = document.querySelector("#js-massege");
var elBtn = document.querySelector("#js-btn");

elForm.addEventListener("submit", function(e){
    e.preventDefault();
    var InputValue = parseFloat(elInput.value, 10);
    elMassege.textContent = InputValue * elCurrencySelect.value;
});

