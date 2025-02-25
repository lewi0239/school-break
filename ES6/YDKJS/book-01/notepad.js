/* 
Brodie Lewis
2/25/2025
*/

//brain dump while reading YOU-DONT-KNOW-JS

// 2/25/25 Prototypal Classes:

var Classroom = {
  welcome() {
    console.log("Welcome, students!");
  },
};

var mathClass = Object.create(Classroom);

mathClass.welcome(); //Welcome, Students!

//function

/* 
All functions by default refenrence an empyt object at a property named prototype. Despite the confusing naming, ths is not the functions prototype (Where the function is prototype linked to), but rather the prototype object to link when other objects are created by calling the function with new
*/

function schoolroom() {}

schoolroom.prototype.welcome = function hello() {
  console.log("welcome, students to the school room!");
};

var healthClass = new schoolroom();

healthClass.welcome();

//ES6 Class Mechanism

class Dog {
  //constructor
  constructor() {
    //..
  }

  //methods
  welcome() {
    console.log("Woof!");
  }
}

var larryTheDog = new Dog();

larryTheDog.welcome();

//Under the covers, the same prototype linkage is wired up, but this class syntax fits the class-oriented design pattern much more cleanly than "prototypal classes".
