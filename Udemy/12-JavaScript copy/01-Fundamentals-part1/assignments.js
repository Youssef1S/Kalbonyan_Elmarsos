// LECTURE: Values and Variables
let country = "Egypt";
let contient = "Africa";
let population = 104;

console.log(country);
console.log(contient);
console.log(population);

// LECTURE: Data Types
let isIsland;
isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = "Arabic";

const age = 22;
// age = 20;  // Uncaught TypeError: Assignment to constant variable.

// LECTURE: Basic operators
population /= 2;

population++;
console.log("The number of population", population);

let finland = 6;
console.log(population > finland);

let avgCountry = 33;
console.log(population < avgCountry);

let description = country + " is in " + contient + ", and its " + population + " million people speak " + language;
console.log(description);

// LECTURE: Strings and template literals
let newDescription = `${country} is in ${contient}, and its ${population} million people speak ${language}`;
console.log(newDescription);