const prompt = require("prompt-sync")();
function studentGrade()
{
    let grade =prompt("Enter Students grades between 0 and 100:  ");//prompts user to enter grade
    grade = parseFloat(grade);
    

    if(isNaN(grade)|| grade<0 || grade>100)//checks if what is entered is a number,should not be greater than 100 
    {
        return "You entered an invalid grade,Please enter a number between 0 and 100"

    }
  else if (grade > 79) {
    return "A";
  } 
  else if (grade >= 60 && grade <= 79) {
    return "B";
  } 
  else if (grade >= 50 && grade <= 59) {
    return "C";
  } 
  else if (grade >= 40 && grade <= 49) {
    return "D";
  } 
  else {
    return "E";
  }
 
}
console.log(studentGrade())

//using Switch case
// function studentGrade1(){
//   let marks = prompt("Enter a student Grade : ");
//   let grade;
//   marks=parseFloat(marks);//it takes in student marks as float values cause marks may contain a point
// switch(marks){
//   case (marks>79):
//     grade= 'A';
//     break;
//   case (marks>60 && marks<=79):
//     grade= 'B';
//     break;
//   case (marks>50 && marks<60):
//     grade= 'C';
//     break;
//   case (marks>40 && marks<=49):
//     grade= 'D';
//     break;
//   // default:
//   //   grade= 'E';
  
// }
// return `The student's grade is ${grade}`;
// }
// console.log(studentGrade1())
