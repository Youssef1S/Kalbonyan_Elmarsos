// Coding Challenge #2

/*
  - Use the BMI example from Challenge #1 and improve it.
    1. Print a nice output to the console, saying who has the higher BMI. 
       the message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
    2. Use a template string to include the BMI values is the output.
        #Example: "mark's BMI (28.3) is higher than John's (23.9)".
    
  - HINT: Use an if/else statement.
*/

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = markMass / (johnHeight * johnHeight);

const markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
