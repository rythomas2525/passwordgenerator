
var ResultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");




const randomFunction = {
    upper: randomUppercase,
    number: randomNumber,
    lower: randomLowercase,
    symbols: randomSymbol

};


generateEl.addEventListener("click", () => {
    var length = +lengthEl.value;
    var lowerCheck = lowercaseEl.checked;
    var upperCheck = uppercaseEl.checked;
    var numbersCheck = numbersEl.checked;
    var symbolCheck = symbolsEl.checked;


    console.log(lowerCheck)
});


function randomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log(randomSymbol())