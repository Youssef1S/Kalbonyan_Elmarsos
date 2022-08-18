// Primitives: number, char, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Function & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generic

function insertAtBegining<T>(array: T[], value: T) {
  return [value, ...array];
}

const arr = [1, 2, 3];

const updatedArr = insertAtBegining(arr, -1);

console.log(updatedArr);

// updataeArr[0].slice(" ");
