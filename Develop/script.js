// Assignment Variable
var generateBtn = document.querySelector("#generate");

var symbol = ['!','@','#','$','%','^','&','*','=','_','-','.','?', '~'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var num = [0,1,2,3,4,5,6,7,8,9];

//get user input
function userChoice() {
  //chages string into a number 
var pwLength = parseInt(prompt("How many charactor is your password? "));

if (isNaN(pwLength) === true) {
  alert("This need to be a number!!!"); 
  return;
}

if (pwLength < 8 || pwLength > 128) {
  alert("Must be between 8 to 128 characters!!!");
  return;
  
}

var sysmbolChoice = confirm("Do you want to include symbol in your password?");
var upperChoice = confirm("Do you want to include capital letters in your password?");
var lowerChoice = confirm("Do you want to include lowercase letters in your password?");
var numChoice = confirm("Do you want to include numbers in your password?");

if (sysmbolChoice === false && upperChoice === false && 
  lowerChoice === false && 
  numChoice === false ) {
    alert("Need to choose at least one!!!")
    return;
  
  }
var options = {
  pwLength, sysmbolChoice, upperChoice, lowerChoice, numChoice
}


return options;
}

  
//Password condition
function generatePassword() {
 var pwArray = [];
 var resultArray = [];

 
 var options2 =  userChoice()
 
if (options2.sysmbolChoice === true) {
  pwArray = pwArray.concat(symbol)
}
if (options2.upperChoice === true) {
  pwArray = pwArray.concat(upperCase)
}if (options2.lowerChoice === true) {
  pwArray = pwArray.concat(lowerCase)
}if (options2.numChoice === true) {
  pwArray = pwArray.concat(num)
}

for (var i=0; i< options2.pwLength; i++) {
 var index = Math.floor(Math.random() * pwArray.length);
 
 var value = pwArray[index];

 
 resultArray.push(value)
}
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

