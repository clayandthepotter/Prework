// Ex.8

// const firstName = "Jane";
// const lastName = "Austen";
// const fullName = firstName + lastName;
// console.log("The full name is", fullName);

// const fullName = firstName + " " + lastName;

const patientName = "Evelyn Parks";
let apptTime = "2:31pm";
let apptDay = "Friday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);

const firstName = "Clayton" //add your first name
const lastName = "Prickett" //add your last name
const fullNameConcat = firstName + " " + lastName //create your full name from the first two variables using concatenation 
const fullNameInterp = `${fullNameConcat}`//create your full name from the first two variables using interpolation

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = 29 //add your age
let faveFood = "Sushi" //add your favorite food
let faveColor = "Blue" //add your favorite color
let miniBio = `Hi, my name is ${fullNameConcat}. I am ${myAge} years old. My favorite food is ${faveFood}, and my favorite color is ${faveColor}`  //use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio);
