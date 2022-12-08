let pass = document.getElementById("copyPassword");


let passLength = document.getElementById("passLength");
let uppercaseLetter = document.getElementById("uppercase");
let lowercaseLetter = document.getElementById("lowercase");
let pasNumbers = document.getElementById("number");
let passSymbols = document.getElementById("symbol");
let genaratePassowrd = document.getElementById("genaratePassowrd")

//assign the value
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}



function generatePassword() {
    const len = passLength.value;
    let password = "";
    if (uppercaseLetter.checked) {
        password += getUppercase();
    }
    if (lowercaseLetter.checked) {
        password += getLowercase();
    }
    if (pasNumbers.checked) {
        password += getNumber();
    }
    if (passSymbols.checked) {
        password += getSymbol();
    }
    for (let i = password.length; i < len; i++) {
        const random = generateRadom();
        password += random;
    }


    //assign the value to input field


    pass.value = password;
}




function generateRadom() {
    const newPassword = [];
    if (uppercaseLetter.checked) {
        newPassword.push(getUppercase());
    }
    if (lowercaseLetter.checked) {
        newPassword.push(getLowercase());
    }
    if (pasNumbers.checked) {
        newPassword.push(getNumber());
    }
    if (passSymbols.checked) {
        newPassword.push(getSymbol());
    }
    if (newPassword.length === 0) return "";
    console.log(newPassword)
    return newPassword[Math.floor(Math.random() * newPassword.length)];
}













// genaratePassowrd.addEventListener("click", generatePassword);




// const getBtn = document.getElementById('gPassword')



// getBtn.addEventListener('click',()=>{
//     var randumPass = Math.random()
//     console.log(randumPass)
// })