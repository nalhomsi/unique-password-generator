
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values: 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    newps = generatePassword();
    document.getElementById("password").placeholder = newps;
});

// function to generate password
function generatePassword() {
    // Asks user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  
    if (!enter) {
        alert("This needs a value in order to proceed");
    } else if (enter < 8 || enter > 128) {
      
        enter = parseInt(prompt("You must choose between 8 and 128"));
       

    } else {
        // Continues once user input is validated 1-4
        confirmNumber = confirm("Would you like your password to contain numbers?");
        confirmCharacter = confirm("Would you like your password to contain special characters?");
        confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
        confirmLowercase = confirm("Would you like your password to contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose at least one criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
   
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
   
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

   
    // Random selection of all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  
    var newps = password.join("");
    UserInput(newps);
    return newps;
}
// password into the textbox

function UserInput(newps) {
    document.getElementById("password").textContent = newps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
