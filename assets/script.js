// Assignment Variable
var generateBtn = document.querySelector("#generate");
//Assign array for all input user can choose
var symbol = ['!','@','#','$','%','^','&','*','=','_','-','.','?', '~'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var num = [0,1,2,3,4,5,6,7,8,9];

//function to get user input
function userChoice() {

//ask user to choose how long the password will be and chages that choice from string into a number 
var pwLength = parseInt(prompt("How many charactors would you like to be in your password? "));

//contengency so function will stop if user not follow prompt
if (isNaN(pwLength) === true) {
  alert("This need to be a number!!! Please click Generate Password again!!!"); 
  return;
}

if (pwLength < 8 || pwLength > 128) {
  alert("Must be between 8 to 128 characters!!! Please click Generate Password again!!!");
  return;
  
}

//ask user to choose what will be included in the password.
var symbolChoice = confirm("Do you want to include symbols in your password?");
var upperChoice = confirm("Do you want to include capital letters in your password?");
var lowerChoice = confirm("Do you want to include lowercase letters in your password?");
var numChoice = confirm("Do you want to include numbers in your password?");

//contengency so user need to pick at least one caterory in password.  
if (symbolChoice === false && upperChoice === false && 
  lowerChoice === false && 
  numChoice === false ) {
    alert("Need to choose at least one condition for your password!!! Please click Generate Password again!!!")
    return;
  
  }

//package all user choices and name that package
var userChoice = {
  pwLength, symbolChoice, upperChoice, lowerChoice, numChoice
}

//output function
return userChoice;
}

  
//function to generate password
function generatePassword() {

  //create 2 empty array for an array method
 var pwArray = [];
 var resultArray = [];

 //give  userChoice function a name 
 var options2 =  userChoice()
 
 //check which condition is true and add that array to pwArray
if (options2.symbolChoice === true) {
  pwArray = pwArray.concat(symbol)
}
if (options2.upperChoice === true) {
  pwArray = pwArray.concat(upperCase)
}if (options2.lowerChoice === true) {
  pwArray = pwArray.concat(lowerCase)
}if (options2.numChoice === true) {
  pwArray = pwArray.concat(num)
}

//pick random index in all array base on number of characters user choose  
for (var i=0; i< options2.pwLength; i++) {
 var index = Math.floor(Math.random() * pwArray.length);
 
 //displaying the value of the index chosen randomly
 var value = pwArray[index];

// push value  to reultArray
 resultArray.push(value)
}
//join Array to remove ','
return resultArray.join("");
}
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

