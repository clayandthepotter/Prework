// Ex. 2
// This is my first program!
// console.log('Hello World!');

/*console.log("There once was a writer of code");
console.log('Who wanted to learn JS and node');
console.log('They said "Once I can learn,"');
console.log("'I'll increase what I earn.'");
console.log("So now they're in full programmer mode!");*/

// Ex. 3

console.log("This is a string, it has quotes.");
console.log(100);
console.log("100");

console.log("My name is: ");
console.log("Clayton"); //change this line
console.log("My age is: ");
console.log(29); //change this line, which type should you use?
console.log("My zip code is: "); 
console.log("76058"); //change this line, which type should you use?

// Ex. 4

console.log("5 + 4 = ");
console.log(5 + 4);

console.log("10 - 7 = ");
console.log(10 - 7);

console.log("6 * 3 = ");
console.log(6 * 3);

console.log("18 / 2 = ");
console.log(18 / 2);

console.log("4 to the 2nd power is: ");
console.log(4 ** 2);

console.log("The remainder when 25 is divided by 4 is: ");
console.log(25 % 4);

console.log("13 + 8 / 2 - 1 = ");
console.log(13 + 8 / 2 - 1); //What will this equal? Remember Order of Operations!

console.log("(13 + 8) / (2 - 1) = ");
console.log((13 + 8) / (2 - 1)); //What will this equal? Is it the same as the previous line?

console.log("The sum of 9 and 15 is: ");
console.log(9 + 5); //change this line
console.log("The difference between 100 and 48 is: ");
console.log(100 - 48); //change this line
console.log("The product of 56 and 32 is: ");
console.log(56 * 32); //change this line
console.log("The quotient of 198 and 6 is: ");
console.log(198 / 6); //change this line
console.log("3 raised to the 5th power is: ");
console.log(3 ** 5); //change this line
console.log("The remainder when 45 is divided by 7 is: ")
console.log(45 % 7); //change this line
console.log("The product of 5 and 7 added to the quotient of 12 and 3 is: ");
console.log((5 * 7) + (12 / 3)); //change this line

// Ex. 5

console.log("True or false: 5 is less than 2");
console.log(5 < 2); // false
console.log("True or false: 19 is not equal 11");
console.log(19 != 11) // true
console.log("True or false: 10 is greater than or equal to 10");
console.log(10 >= 10); // true

console.log(2 == 2); // ==, true
console.log(10 > 11); // >, false
console.log(11 <= 10); // <=, false
console.log(7 != 5); // !=, true

// Ex. 6

console.log("true or false: wrapping in double quotes is the same as wrapping in single quotes");
console.log("Hello world!" == 'Hello world!');

console.log("true or false: using single quotes inside a string is the same as using double quotes inside the string");
console.log("He said 'no'!" == 'He said "no"!');

console.log("true or false: strings that say the same thing but have different capitalization are not equal");
console.log("Hello world!" != "hello world!");

console.log("true or false: in javascript, a string is considered less than another string if it would come before it in alphabetical order");
console.log("apple" < "banana");

console.log("The number 5 is the same value as the string '5'");
console.log(5 == "5");

console.log("The number 5 is the same value and same data type as the string '5'");
console.log(5 === "5");


console.log('5' == "5"); // ==, true
console.log(1 < "-1"); // <, false
console.log('hello' !== 'hello'); // !==, false
console.log(5 != "5.1"); // !=, true
console.log("5" === '5'); // ===, true

// Ex. 7

const a = 4;
const b = 3; 
let c = 2*a + b;

console.log("The value of c is");
console.log(c);


const cookiesInBox = 12;
let numberOfBoxes = 4;
let totalCookies = cookiesInBox * numberOfBoxes;

let phoneBill = 55.00;
let wifiBill = 30.00;
let tvBill = 14.99;

let billsTotal = phoneBill + wifiBill + tvBill;

console.log("The total number of cookies is", totalCookies);
console.log("I owe", billsTotal, "in bills this month");


const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal = mikesMeal + juansMeal + sheasMeal //complete the line to calculate the total price for all of the meals
console.log("Total cost of meals =", mealsTotal)

const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks //complete the line to calculate the total price for all of the meals
console.log("Total cost of drinks =", drinksTotal)

const subtotal = mealsTotal + drinksTotal //calculate the subtotal for the entire bill (both drinks and meals)
console.log("Subtotal =", subtotal)

const tax = subtotal * .1 //calculate the tax on the bill assuming a 10% tax rate
console.log("Tax =", tax.toFixed(2))

const tip = subtotal * .2 //calculate what a 20% tip on the bill would be
console.log("Tip =", tip.toFixed(2))

const billTotal = subtotal + tax + tip //calculate the total due for the bill

const splitAmount = billTotal / 3 //calculate how much each person pays if they decide to split the bill evenly

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");

// Ex.8

// const firstName = "Jane";
// const lastName = "Austen";
// const fullName = firstName + lastName;
// console.log("The full name is", fullName);

// const fullName = firstName + " " + lastName;

/*const patientName = "Evelyn Parks";
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
console.log(miniBio);*/

// Ex. 8

const firstName = "Clayton";
const middleName = "Aaron";
const lastName = "Prickett";

const firstInitial = firstName[0];
const middleInitial = middleName[0];
const lastInitial = lastName[0];

const monogram = firstInitial + middleInitial + lastInitial;
console.log(`${firstName}'s monogram is ${monogram}`)


const fullString = "SOFTWARE DEV"; //SFTWRDV

const vanityLetter1 = fullString[0] //your code here
const vanityLetter2 = fullString[2] //your code here
const vanityLetter3 = fullString[3]; //use this as an example
const vanityLetter4 = fullString[4] //your code here
const vanityLetter5 = fullString[6] //your code here
const vanityLetter6 = fullString[9] //your code here
const vanityLetter7 = fullString[11] //your code here

const vanityPlate = vanityLetter1 + vanityLetter2 + vanityLetter3 + vanityLetter4 + vanityLetter5 + vanityLetter6 + vanityLetter7 //your code here

console.log(`The new vanity plate is ${vanityPlate}`);