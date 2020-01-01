
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");

console.log(resultEl, lengthEl, uppercaseEl, lowercaseEl, numbersEl, symbolsEl, generateEl, copyEl)

var listOfRandomValues = []


var randomChars = {
    number: randomNumber,
    lowerCase: randomLowerCase,
    upperCase: randomUpperCase,
    symbol: randomSymbol
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}


generateEl.addEventListener("click", () => {
    var lengthCheck = lengthEl.value;
    var numbersCheck = numbersEl.checked;
    var lowercaseCheck = lowercaseEl.checked;
    var uppercaseCheck = uppercaseEl.checked;
    var symbolCheck = symbolsEl.checked;


    resultEl.innerText = generatePassword(lengthCheck, numbersCheck, lowercaseCheck, uppercaseCheck, symbolCheck);

});


function generatePassword(length, number, lowercase, uppercase, symbol) {



    console.log(check)



    if (check <= 0 || length < 8) {
        return "";
    }

    for (i = 0; i < lengthCheck.length; i++) {
        var check = lengthCheck + numbersCheck + lowercaseCheck + uppercaseCheck + symbolCheck;
        var typeArray = [{ number }, { uppercase }, { lowercase }, { symbol }]



    }

