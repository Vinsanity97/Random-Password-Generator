// Assignment code here
//create array for cases

//array created for computer to randomly select for password
var numbaz = ['1','2','3','4','5','6','7','8','9','0'];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','@','$','#','%','&','?'];
var upperAlphabet = alphabet.map(function(x){ return x.toUpperCase(); });
var numbersAndLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
var upperAndLower = upperAlphabet.concat(alphabet);
var finishPassword = [];




//this function will add special characters if the user wants it
function specialType(){
  var specialType = prompt( "Would you like to include special characters also? \n(YES or NO) (caps lock is needed)");

  //first we ask the user if they want any special characters if they type yes it is added to the array that the random generator selects from
  if(specialType == "YES"){
    //in here we add the special characters
    alphabet = alphabet.concat(specialChar);
    numbaz = numbaz.concat(specialChar);
    numbersAndLetter = numbersAndLetter.concat(specialChar);
    upperAndLower = upperAndLower.concat(specialChar);
    
 



  }else{
    //here if the user does not want special characters we reset it back to it's original array
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    numbaz = ['1','2','3','4','5','6','7','8','9','0'];
    numbersAndLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    upperAlphabet = alphabet.map(function(x){ return x.toUpperCase(); });
    upperAndLower = upperAlphabet.concat(alphabet);

  }
}


//function to choose random characters in an array and push it to the finished array(finishedPassword)
function passMaker(array1, passLength){
  for(i = 0; i < passLength;i++){
  var computerChoice = array1[Math.floor(Math.random()*array1.length)]
  console.log('computerChoice ' + computerChoice);
  finishPassword.push(computerChoice);
  }
}

function generatePassword(){

  //ask user for password length and store inside variable
  while(true){
  var passLength = prompt("How many characters would you like to have in your password? \n(ex: 1234)");

  //use if statements to check if value is between 8 and 128 for password length 
  if(passLength > 8){

    if(passLength < 128){

      var confirmation = prompt( "Your password will be ("+ passLength + ") characters long Type CONFIRM if correct \n(caps lock needed)");
      
      //if user does not confirm it is right length it will go back to ask them again what lengh they want until CONFIRM is typed
      if(confirmation == "CONFIRM"){

        var charType = prompt("Please enter 1 for letters 2 for numbers or 3 for both");
        break;
      
      }
    }
  }
}


    
    //this entire if statement chooses what the user wants in their password
    if(charType == 1){
      //this gives the user letters for passwords
      var kindCasing = prompt("Do you want uppercase or lowercase?\n (Please type UPPER, LOWER, or BOTH)caps lock needed");
      
      if(kindCasing == "UPPER"){

        //This uppercases the text if the user wants it
        specialType();
        alphabet = alphabet.map(function(x){ return x.toUpperCase(); })
        passMaker(alphabet,passLength);

      }

      else if(kindCasing == "LOWER"){

        //this gives the user lowecase letters
        alphabet = alphabet.map(function(x){ return x.toLowerCase(); })
        specialType();
        passMaker(alphabet,passLength);

      }else{

        //this gives both upper and lowercase
        specialType();
        upperAlphabet = alphabet.map(function(x){ return x.toUpperCase(); });
        passMaker(upperAndLower,passLength);

      }
    
      
    }else if(charType == 2){
      //this else if gives the user numbers and no letters
     
      specialType();
      passMaker(numbaz,passLength);

    }else{
      //this else statement gives the user numbers and letters
      var kindCasing = prompt("Do you want uppercase or lowercase?\n (Please type UPPER, LOWER, or BOTH)caps lock needed");

      if(kindCasing == "UPPER"){

        //This uppercases the text if the user wants it
        numbersAndLetter = numbersAndLetter.map(function(x){ return x.toUpperCase(); })
        specialType();
        passMaker(numbersAndLetter,passLength);

      }

      else if(kindCasing == "LOWER"){
        //this gives the user lowecase letters
        numbersAndLetter = numbersAndLetter.map(function(x){ return x.toLowerCase(); })
        specialType();
        passMaker(numbersAndLetter,passLength);

      }else{

//this gives both upper and lowercase
        specialType();
        upperAlphabet = alphabet.map(function(x){ return x.toUpperCase(); });
        passMaker(upperAndLower,passLength);

      }
    }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.textContent = "Your password is " + finishPassword.join(" ");
  finishPassword = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

