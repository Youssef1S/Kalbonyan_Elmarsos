// Functions
function logger() {
  console.log("My name is Youssef");
}

// call / running / invoking function
logger();
logger();
logger();

function fruitProcessor(appels, oranges) {
  console.log(appels, oranges);
  const juice = `Juice with ${appels} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 8);
console.log(appleOrangeJuice);

// ---------------------------------------------------------------------------------------------------------

// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2002);

console.log(age1, age2);

// Function arrow
const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(2002);
console.log(age3);

const yearsUnitRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUnitRetirement(2002, "Youssef"));

// ---------------------------------------------------------------------------------------------------------

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "peter";

// Arrays
const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const yosif = ["Youssef", "Shaaban", 2022 - 2002];
console.log(yosif);

// ---------------------------------------------------------------------------------------------------------
// Arrays Methods

// Add elements
const newLength = friends.push("Ali"); // Last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Frist
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Frist
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends);
console.log(friends.includes("Steven"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

// ---------------------------------------------------------------------------------------------------------

// object
const youssef = {
  firstName: "Youssef",
  lastName: "Shaaban",
  birthYeah: 2002,
  job: "Student",
  friends: ["Mohammed", "Yousry", "Ahmed"],
  hasDriverLicense: true,
  
  // calcAge: function(birthYeah) {
    //   return 2022 - birthYeah;
    // }
    
    calcAge: function () {
      this.age = 2022 - this.birthYeah;
      return this.age;
    },
    
    getSummery: function () {
      return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicense? 'a' : 'no'} driver license`;
    },
  };
  
console.log(youssef.lastName);
console.log(youssef["friends"]);

// const interestedIn = prompt("What do you want to know about youssef? Choose between firstName, lastName, age, job and friends");
// console.log(youssef[interestedIn]);

youssef.country = "Egypt";

console.log(youssef);

// console.log(youssef['calcAge'](2002));
console.log(youssef.calcAge());
console.log(youssef.age);

console.log(youssef.getSummery());

// ---------------------------------------------------------------------------------------------------------

// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// ---------------------------------------------------------------------------------------------------------

// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}

// ---------------------------------------------------------------------------------------------------------

// Looping Backwards and Loops in Loops
const jona = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jona.length - 1; i >= 0; i--) {
  console.log(i, jona[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// ---------------------------------------------------------------------------------------------------------

// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
