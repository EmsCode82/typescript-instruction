var readline = require('readline-sync');
console.log("Date Demo App");

let year: number = readline.questionInt("Birth YYYY? ");
let month: number = readline.questionInt("Birth MM? ");
let day: number = readline.questionInt("Birth DD? ");


let birthDate: Date = new Date (year+"-"+month+"-"+day);

console.log("birthDate", birthDate);
console.log("birthDate formatted as mm/dd/yyyy");
let dateString: string = (birthDate.getMonth()+1) + "/" 
+ birthDate.getDate() + "/" + birthDate.getFullYear();
console.log(dateString);
