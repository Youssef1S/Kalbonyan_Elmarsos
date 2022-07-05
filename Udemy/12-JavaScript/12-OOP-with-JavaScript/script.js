"use strict";

// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const youssef = new Person("Youssef", 2002);
console.log(youssef);

// 1. New () is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(youssef instanceof Person); // true

//-----------------------------------------------------------------------------
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

youssef.calcAge();
matilda.calcAge();

console.log(youssef.__proto__);
console.log(youssef.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(youssef)); // true

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(youssef.species, matilda.species);

console.log(youssef.hasOwnProperty("firstName")); // true
console.log(youssef.hasOwnProperty("species")); // false

//-----------------------------------------------------------------------------
// Prototypal Inheritance on Built-In Objects
console.log(youssef.__proto__);
// Object.prototype (top of prototype chain)
console.log(youssef.__proto__.__proto__);
console.log(youssef.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 2, 3, 5, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

//-----------------------------------------------------------------------------
// ES6 Classes
// Class expression
// const personCl = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2027 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);

//-----------------------------------------------------------------------------
// Setter and Getters
const account = {
  owner: "youssef",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.account);

account.latest = 50;
console.log(account.movements);

//-----------------------------------------------------------------------------
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init("sarah", 1979);

sarah.calcAge();

//-----------------------------------------------------------------------------
// Inheritance Between Classes: Constructor function
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear);
  this.course = course;
};

student.prototype = Object.create(person.prototype);

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new student("Mike", 2020, "Computer science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof student);
console.log(mike instanceof person);
console.log(mike instanceof Object);

student.prototype.constructor = student;
console.dir(student.prototype.constructor);

//-----------------------------------------------------------------------------
// Inheritance Between Classes: ES6 Classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Youssef", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

//-----------------------------------------------------------------------------
// Inheritance Between Classes: Object.create
const max = Object.create(PersonProto);

const studentProto = Object.create(PersonProto);
studentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(studentProto);
jay.init("jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();

//-----------------------------------------------------------------------------
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Private methods
  // #approveLoan(val)
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);

Account.helper();
// console.log(acc1.#movements);
// console.log(acc1.#approvation(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(100).withdraw(4000);
console.log(acc1.getMovements());

