var readlineSync = require("readline-sync");
var chalk = require("chalk");


// welcoming the user

var userName = readlineSync.question("Can I know your name please! \n");
console.log("Welcome! " + chalk.green.underline.bold.bgGrey(userName.toUpperCase()));
var dateOfBirth = readlineSync.question(("Please tell us the date of birth in following format (only date and month)") +
			chalk.bold(' DD/MM: \n'));


// spliting the date input for taking out birth year.
dateOfBirth=setDate(dateOfBirth);
var [birthDay,birthMonth]=dateOfBirth.toString().split("/");

 //function calling
primeDayCheck(birthDay);

// input date check.
function inputDateCheck(date){
  var [dayCheck,monthCheck]=date.toString().split("/")
  if(dayCheck < 1|| dayCheck > 31|| dayCheck == ""||
     monthCheck === null || monthCheck < 1 || monthCheck > 12|| monthCheck == "" ||

     isNaN(dayCheck) === true|| isNaN(monthCheck) === true|| 
     (monthCheck==2 && dayCheck >=30))
     {
        return false;
     }
  else{ 
     return true;
     }
}


function setDate(dateOfBirth){
  var flag=false;
  do{
      flag=inputDateCheck(dateOfBirth)
      if(flag==false){
          console.log(chalk.red.bgWhite.bold("\nInvalid date input. Please enter date in specified date format.\n"))
          dateOfBirth = readlineSync.question(chalk.white.bgGrey.bold("Enter your date of birth in above mentioned format: \n"));
      }
    }
  while(flag == false);
  return dateOfBirth;
}



function primeDayCheck(day){
  var count = 0;
  for(var i = 1; i <= day/2; i++){
   if(day % i == 0){
     count++;
   } 
   if(count > 1){
     break;
   }
  }
  count > 1 ? console.log(chalk.bold(userName.toUpperCase()) +", your birthDate is " + (chalk.red.bgGrey.bold("not prime.")))
  : console.log(chalk.bold(userName.toUpperCase()) + ", your birthDate is "+ (chalk.green.bgGrey("prime")));
}
console.log(chalk.yellowBright.underline.bold("\n Feel free to share this with your friends & family :P"));