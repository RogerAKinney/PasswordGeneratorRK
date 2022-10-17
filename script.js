
var generateBtn = document.querySelector("#generate");
var passCriteria = {

  // Password Property Values
  passLength: 0,

  passNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  passUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  passLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  passCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}

  // Function for Password & Call
function writePassword() {

  var password = generatePassword();
  
  // PasswordText = to the textArea on index.html witht he ID of password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to handle the operations to generate a new password
function generatePassword() {

  // Holds the password to be generated and returned 
  var result = "";

  // Variables to collect input from user
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  // Initialize characters
  passwordLength = 0;
  passCriteria.passLength = 0;
  result = "";

  // Password Checked for Length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    // User presses cancel
    if (passwordLength === null) {
      // return "Null";
    }
    else {
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        // return "Your secure password";
      }
      else {

        // Check Length
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          // return "Invalid Length";
        }
        else {
          showPrompts();
          while (passCriteria.passLength < passwordLength) {  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              // Array for LowerCase criteria
              if (lowerCase === true && passCriteria.passLength < passwordLength) {
                var lc = passCriteria.passLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                passCriteria.pwdLength++;
              }

              // Array for PassCharacters criteria
              if (specialChar === true && passCriteria.passLength < passwordLength) {
                var sc = passCriteria.passCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                passCriteria.passLength++;
              }

              // Array for PassUpperCase criteria
              if (upperCase === true && passCriteria.passLength < passwordLength) {
                var uc = passCriteria.passUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                passCriteria.passLength++;
              }

              // Array for PassNumber criteria
              if (numbers === true && passCriteria.passLength < passwordLength) {
                var num = passCriteria.passNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                passCriteria.passLength++;
              }
            }
          }
        }
      }
    }

    // Return to calling
    return result;

    // Criteria Prompt
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}