// Assignment Code
var number = ["0123456789"]

var lowerCase = ["abcdefghijklmnopqrstuwxyz"]

var upperCase = ["ABCDEFGHIJKLMOPQRSTUVWXYZ"]

var symbol = ["!@#$.,*&"]

var result = []

var possibleArray = [] 



var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

function generatePassword (){
  var passwordLength = prompt("Please enter between 8 to 128 for how many characters you would like");
 if (!passwordLength || passwordLength < 8 || passwordLength > 128)
  return alert("Invalid Entry, please try again");

  var userNumber = confirm("Do you want the password to include numbers?");
  if (userNumber === true){
    possibleArray = possibleArray + number
  } console.log(possibleArray);

  var userUpperCase = confirm("Do you want the password to include upper case letters?");
  if (userUpperCase === true){
    possibleArray = possibleArray + upperCase
  } console.log(possibleArray);

  var userLowerCase = confirm("Do you want the password to include lower case letters?")
  if (userLowerCase === true){
    possibleArray = possibleArray + lowerCase
  } console.log(possibleArray);

  var userSymbol = confirm("Do you want the password to include symbols?")
  if (userSymbol === true){
    possibleArray = possibleArray + symbol
  } console.log(possibleArray);

  for (var i = 0; i < passwordLength; i++){
    var complete = Math.floor(Math.random() * possibleArray.length)
    var solution = possibleArray[complete]
    result.push(solution);


  } return result.join(" ");
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 