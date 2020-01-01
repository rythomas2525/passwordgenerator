
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");


// put 4 arrays here 1 for each  type of character
var specialCharacter = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

var possibleCharacters = []

var guaranteedCharacters = [];
var result = "";


//  get values of check boxes and password length

// var specialCharacterCheckBox = false;
// var numericCharacterCheckBox = false;
// var lowerCaseCheckBox = false;
// var upperCaseCheckBox = false;
// var lengthCheck = 0;

// if statement to prompt again if nothing is checked

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (password === "") { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();


    console.log(copyEl)
});


// 4 if blocks 1 for each check box.  
generateEl.addEventListener("click", function () {
    guaranteedCharacters = []
    result = ""
    resultEl.textContent = ""
    possibleCharacters = []

    if (symbolsEl.checked) {
        // possibleCharacters.push(specialCharacter);
        possibleCharacters = possibleCharacters.concat(specialCharacter);
        guaranteedCharacters.push(specialCharacter[Math.floor(Math.random() * specialCharacter.length)]);
        // console.log(possibleCharacters)
    }
    if (numbersEl.checked) {
        // possibleCharacters.push(numeric)
        possibleCharacters = possibleCharacters.concat(numeric)
        guaranteedCharacters.push(numeric[Math.floor(Math.random() * numeric.length)])
        // console.log(possibleCharacters)
    }
    if (lowercaseEl.checked) {
        //possibleCharacters.push(lowerCase)
        possibleCharacters = possibleCharacters.concat(lowerCase)
        guaranteedCharacters.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
        // console.log(possibleCharacters)
    }
    if (uppercaseEl.checked) {
        //possibleCharacters.push(upperCase)
        possibleCharacters = possibleCharacters.concat(upperCase)
        guaranteedCharacters.push(upperCase[Math.floor(Math.random() * upperCase.length)])
        // console.log(possibleCharacters)
    }

    console.log(guaranteedCharacters)




    for (i = guaranteedCharacters.length; i < lengthEl.value; i++) {


        result += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]

        console.log(result)

    }
    for (i = 0; i < guaranteedCharacters.length; i++) {
        result += guaranteedCharacters[i]
    }
    resultEl.textContent = result


})


