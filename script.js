
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");

console.log(resultEl, lengthEl, uppercaseEl, lowercaseEl, numbersEl, symbolsEl, generateEl, copyEl)


const randomFunction = {
    number: randomNumber,
    upper: randomUppercase,
    lower: randomLowercase,
    symbols: randomSymbol

};


generateEl.addEventListener("click", () => {
    var length = +lengthEl.value;
    var numbersCheck = numbersEl.checked;
    var lowerCheck = lowercaseEl.checked;
    var upperCheck = uppercaseEl.checked;
    var symbolCheck = symbolsEl.checked;


    resultEl.innerText = generatePassword(length, numbersCheck, upperCheck, lowerCheck, symbolCheck);
});

// copyEl.addEventListener("click", () => {
//     var textarea = document.createElement("textarea");
//     var password = resultEl.innerText;

//     if (!password) {
//         return;
//     }

//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
// })

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();


    console.log(copyEl)
});




function generatePassword(length, number, upper, lower, symbols) {

    let generatedPassword = "";

    var howManyTypes = number + upper + lower + symbols;

    console.log("howManyTypes: ", howManyTypes)

    var typeArray = [{ number }, { upper }, { lower }, { symbols }].filter(item => Object.values(item)[0]);


    if (howManyTypes === 0) {
        return " ";
    }

    for (var i = 0; i < length; i += howManyTypes) {

        typeArray.forEach(type => {

            var func = Object.keys(type)[0];



            generatedPassword += randomFunction[func]();
        });

    }

    return generatedPassword;
}




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