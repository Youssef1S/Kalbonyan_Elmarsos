// LECTURE: Values and Variables.
/*
  - JavaScript is case-sensitive
    console !== Console

  -  A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired,
     then they must be separated by semicolons.

  - For variable names use lowerCamelCasing, and use concise, 
      human-readable, semantic names where appropriate.
    . The first character must be a letter or an underscore (_). You can't use a number as the first character.
    . The rest of the variable name can include any letter, any number, or the underscore.
      You can't use any other characters, including spaces, symbols, and punctuation marks.
    . As with the rest of JavaScript, variable names are case sensitive. 
      That is, a variable named Interest_Rate is treated as an entirely different variable than one named interest_rate.
    . There's no limit to the length of the variable name.
    . You can't use one of JavaScript's reserved words as a variable name.
      All programming languages have a supply of words that are used internally by the language and that can't be used
      for variable names because doing so would cause confusion (or worse). Note, too, that JavaScript also has many keywords that should be avoided as well.
  
*/

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Youssef");
console.log(23);

let firstName = "Shaaban";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "teacher";

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// LECTURE: Data Types
/*
  - The data type is seprated into two categories:
    1. Premitive data type.
    2. Object data type.

  - The primitive data type:
    1. Number: Used for decimal and integer. -> let age = 23;
    2. String: Used for text. -> let firstName = 'Youssef';
    3. Boolean: Logical type that can only be true or false. -> let fullAge = true;
    4. Undefined: Value taken by a variable that not yet decisions -> let children;
    5. Null: Also means 'empty value'.
    6. symbol (ES2015): Value that is unique and cannot be changed [Not useful now].
    7. BigInt (ES2020): Larger integers than the number type can hold.

  - JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable.
    Instead, data types are determined automatically.
*/

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof 'Youssef')
console.log(typeof 23)
console.log(typeof true)

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);

console.log(typeof null);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  - Declaring variables and constants:
    - Use the let and const keyword, not var.
    - If variable will not be reassigned, prefer const.
      Other wise, use let.
    - The var statement declares a function-scoped or globally-scoped variable, 
      optionally intializing it to a value. (The old way to declare a variable from ES6)
*/

let age = 30;
age = 32;

const birthYear = 2002;
// Can't change it -> birthYear = 2002; (X)

var myName = "Youssef";
myName = "Mahmoud";

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  - Operators: A symbol that perform a mathematical or logical operation
  - There are the following types of operators in javascript:
    - Arithmetic operators.
    - Comparison operators.
    - Bitwise operators.
    - Logical operators.
    - Assignment operators.
*/

const now = 2022;
const ageYoussef = now - 2002;
const ageSarah = now - 2000;
console.log(ageYoussef);

console.log(ageYoussef * 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 -> 2 * 2 * 2.

const firsTname = "Youssef";
const lastName = "Shaaban";
console.log(firstName + lastName); // Concatination.

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x +1
x--;
x--;
console.log(x);

//comparison operators >, <, >=, <=
console.log(ageYoussef > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
console.log(n);
n = n - 1;

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Equality Operators: == vs. ===
const agE = '18';
if (agE === 18) console.log('You just became an adult :D (strict)');

if (agE == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// The Conditional (Ternary) Operator
const aGe = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = aGe >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (aGe >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${aGe >= 18 ? 'wine 🍷' : 'water 💧'}`);


