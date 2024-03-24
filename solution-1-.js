const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,

  output:process.stdout
})


const promptUser =() =>{
      
    rl.question("please enter the marks: " , (userInput) =>{

     if (userInput.toLocaleLowerCase()==="exit"){
     
      rl.close();
      return
    }
    
    console.log(calculateGrade(userInput))
    promptUser();
  }
    )
    
  }

  promptUser()


//function declaration
function calculateGrade(marks){

    // declare an empty  variable grade

    let grade = ""
    if  (marks > 100 || marks < 0) {
        grade = "Invalid input"
    }

     else if (marks > 79) {
    
        grade = "A";


    } else if (marks >= 60 && marks <= 79 ) {

        grade = "B";

    } else if (marks >= 49 && marks <=59 ) {

        grade = "C";

    } else if (marks >= 40  && marks < 49) {

        grade = "D";


    } else  {

        grade = "E";

    }

    return grade 
}
// call function

//console.log(calculateGrade("100"));