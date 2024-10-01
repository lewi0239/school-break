/* 
What is Core JS?
ECMA is the standard that defines the capabilities of a programming language

JavaScript is the actual language which is the implemented version of ECMAScript

There are different JavaScript Engines that are used to interpret and run JavaScript files. 
The two most prevalent are V8 Chrome from Google and Webkit from Apple. The V8 Chrome engine is
used in Chrome, Edge, Opera, Brave, and Node.js, as well as a number of other smaller browsers 
*/

// To create variables in JavaScript, there are three keywords that we can use:

var old;
let name;
const PI = 3.14;

// The first two lines in this example are declaring variables. This is the process of
// creating the storage space for the value and giving it a label.

// JavaScript programming languages will insist that you tell them what kind of info
// is going to be stored in the variable and will only let you use that one kind of info
// in the variable after it is declared.
// JavaScript lets you change the kind of information (DataType) at any point.
// There are two groups of Data Types in JavaScript: Primitive and objects.
// If your data type is not a primitive, then it's automatically an object.

// Primitives are just a value:

// Objects can have properties, methods, and values/events:

// The primitive types in JavaScript are:

/* 
1. String: a sequence of characters that are used to represent text.
2. Number: a numeric value
3. Boolean: a true or false value
4. Undefined: a variable that has not been assigned a value
5. Null: a variable that has been assigned a value of null
6. Symbol: a unique value that's not equal to any other value
7. BigInt: a numeric value that can represent integers of arbitrary length

If a variable does not hold one of these things, then it is automatically an object.
*/

let Fname = `brodie`;
let alive = true;
let age = 31;
let nothing = undefined;
let empty = null;
let hobbies = ["reading", "writing", "coding"];
let person = {
  name: "Brodie",
  age: 31,
  alive: true,
};

// Object example

let humanMale = new Object({
  Fname: `Lewis`,
  class: `coder`,
  income: (hours, dollars) => hours * dollars,
  favouriteColor: "green",
});

console.log(humanMale);
console.log(typeof humanMale);
console.log(humanMale.Fname);

let get2WeeksPay = humanMale.income(80, 16.55);

console.log(`$${get2WeeksPay}`);

/* 
Functions are series of commands that get bundled together 
so that they can be run, in that order, once or multiple times.

Functions can be passed information when they are called on to run.
They can call other functions to make them run. They can also return some type 
of resulting value when needed.

Functions nearly all have a name, just like variables, so you can reference them when you need them to run.

Functions have arguments and parameters:

An argument is a value that is passed to a function. The goal for writing functions is to make them pure.
This partly means that they should always return the same results if you give them the same input values.
Those input values are the arguments. 

By having arguments for our functions, we gain flexibility and reuse.
Reuse means writing less code.

Parameters are global variables that the function can access. There are two kinds of special syntax: Default parameters
and rest parameters:

Rest:
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

In the following example, the function `multiply` uses rest parameters to collect arguments from the second
one to the end. The function then multiplies these by the first argument.
*/

function hello() {}

function goodBye(name, message) {}

let open = function () {};

function close(num) {
  num = num + 1;
  return num;
}

let next = function (fn) {
  fn();
};

hello();
goodBye("Brodie", "see you later");
open();
close(10);
next(hello);

console.log(goodBye);

// There are two ways to define your function: with a declaration or an expression.

f1();

function f1() {
  return 1 + 1;
}

const f2 = function () {};
f2();

// IIFE (immediately invoked function expression)
// JavaScript wants to run this first

(function f3() {})();

// Return Statements
// If a function does not contain the return keyword, then by default it returns `undefined`.
// If a function does have a return keyword, then as soon as it is encountered, the function stops running and it
// returns whatever single value you put after return.

let valuesAfterReturn = () => 1 + 2 + 3;

console.log(typeof valuesAfterReturn);

function multiply(multiplier, ...theArgs) {
  return theArgs.map((i) => multiplier * i);
}

const arr = multiply(5, 10, 2, 5);
console.log(arr); // [50, 10, 25]

/* 
Arrow Functions:
An arrow function expression is a compact alternative to a traditional function expression, with some semantic 
differences and deliberate limitations in usage.

Arrow functions don't have their own bindings to `this`, `arguments`, or `super`, and should not be used as methods.

Arrow functions cannot be used as constructors. Calling them with `new` throws a TypeError. They also don't have access
to the `new.target` keyword.

Arrow functions cannot use `yield` within their body and cannot be created as generator functions.
*/

const f4 = function (num) {
  return num + 2;
};

const f4Arrow = (num) => {
  return num + 2;
};

const f4shrtArrow = (num) => num + 2;

const f4noArg = () => 1 + 2;

/*
Variable Scope and Hoisting:
Scope is a term used to describe where a variable is visible (can be accessed from). With either 
`let` or `const` we have the same options for scope. A variable can be in the global scope or in block scope.
A block scope is created wherever you write `{}`. Inside the curly braces and does not exist outside them.

Functions (except some arrow functions) all have a set of curly braces, so functions all have their own block
scope. There can be other control structures like if statements or loops that also create blocks. Each of these 
blocks is a new scope to declare variables.

Variables that are declared outside of any function are said to be in the global scope. They are visible anywhere in your code.

Hoisting is an effect that happens to variables and functions in JavaScript when the script is read for the 
first time by the JavaScript engine. When you run a script, it is actually being read twice. Once to identify
all the functions and variables and determine their scope, and a second time to execute the code.

Variable declarations are identified with the first pass. The existence of the variable is hoisted to the top
of their scope. They can't be used from anywhere but the JavaScript engine is aware of their existence.
When you get to the line that declares the variable, the default undefined value is assigned to the variable.

So, function expressions can be assigned to variables. The expression itself does NOT get hoisted. The 
variable name is what gets hoisted to the top of its scope.
*/

let personName = "Bree"; // Global variable

function fn1() {
  let age = 25; // Block scoped and visible anywhere inside this function
  if (age > 17) {
    let isAdulting; // Block scoped inside this if statement
    isAdulting = true;
    // personName, age, and isAdulting are all visible here
  }
  // personName and age are visible here, but NOT isAdulting
}

/*
If statements are a common construct in most programming languages. Simply put, they are a way to let your program make decisions based on yes-no questions.
*/

// if (x == 5) {
// notice the two equal signs
// }

// if (x > 5) {
// do something
// } else {
// the condition was false
// run this code
// }

/*
Two vs. Three Equal Signs:
Two equal signs means we are comparing the values of the two operands.

There is another comparison operator, three equals signs. This means that we are comparing the values and types of the two operands.
*/

let x = 7;

if (x == 7) {
  // This will be true because the value inside x and the value of the number 7 are equal.
}

if (x === 7) {
  // This is also true because the number 7 and the value inside the variable x are the exact same thing.
}

let x1 = 7;
let x2 = `7`;

console.log(x1 == x2); // true
console.log(x1 === x2); // false

/*
Truthiness, Control Flow, Ternary Operators
If statements are a common construct in most programming languages. Simply put, they are a way to let your program make decisions based on yes-no questions.
*/

let studentGrades = 65;

studentMessage = (studentGrades) => {
  if (studentGrades >= 85) {
    console.log(`Great job with ${studentGrades}`);
  } else if (studentGrades >= 75 && studentGrades < 85) {
    console.log(`The ${studentGrades}, could improve`);
  } else {
    console.log(`Seek help`);
  }
};

let windowsStateActive = true;

getStateUpdate = (windowsStateActive) => {
  return windowsStateActive
    ? "The window is active "
    : "The window state is offline";
};

console.log(getStateUpdate(windowsStateActive));

/* 
Logical short-circuiting refers to the behavior where JavaScript stops evaluating expressions as soon as the outcome is determined. This is common with logical operators:

Logical AND (&&): If the first value is false, it short-circuits, because the whole expression will be false no matter what the second value is.
Logical OR (||): If the first value is true, it short-circuits, because the whole expression will be true no matter what the second value is.
*/

let isLoggedIn = true;
let isAdmin = false;

//console.log(isLoggedIn && isAdmnin)

let defaultName = "Guest";
let userName = "";

// console.log(userName || defaultName);

/*
Document Object Model (DOM):
When the browser reads an HTML file, it creates an Object model representing all the content
on the page. It builds a tree structure that helps it know which elements are nested
inside each other, which elements are parents, and which are children.

This is a visual representation of how a browser sees the page. You can think of each indent as the start of a new branch in the DOM tree. Inside the HTML object, there are two children - head and body. Inside the head are two more children - title and link. Title has a child, which is #text. The link element has no children. Inside body > header > h1, there are two children - img and #text. The img and the #text are siblings:

doctype
html
  head
    title
      #text
    link
  body
    header
      h1
        img
        #text
    nav
      a
        #text
      a
        #text
      a
        #text
    main
      h2
        #text
      p
        #text
    footer
      p
        #text

I need to be able to visualize every page in this manner. Understand that when you are searching for things or altering things, you will be working with parents, children, and siblings.

One of the things that sets Node.js and JavaScript in the browser apart is the DOM. Node.js does NOT have access to the DOM.

The DOM is NOT part of core JavaScript.

The DOM is an add-on that browsers get as part of the window object.
*/

let h1 = document.querySelector("h1");
if (h1) {
  console.log(h1.textContent);
}

let getMyCarID = 123;

function displayId(getMyCarID) {
  let p = document.createElement("p");
  p.textContent = `${getMyCarID}`;
  document.body.appendChild(p);
}

displayId(getMyCarID);

function displayFiles() {
  let myFileArray = [
    {
      fileName: "2024-revenue",
      size: "24kbs",
      token: 1,
      department: "finance",
    },
    {
      fileName: "2020-marketing",
      size: "1mb",
      token: 2,
      department: "marketing",
    },
    {
      fileName: "2023-it-security-plan",
      size: "50mb",
      token: 3,
      department: "IT",
    },
  ];

  let fileListElement = document.createElement("ul");

  // Corrected block to ensure proper creation and appending
  myFileArray.forEach((file) => {
    let appendClass = document.createElement("li"); // Ensure the <li> is correctly created

    // Set the content of the <li>
    appendClass.textContent = `File: ${file.fileName}, Size: ${file.size}, Department: ${file.department}`;

    // Append the list item to the unordered list
    fileListElement.appendChild(appendClass);

    // Log that the item was successfully appended
    console.log(`Appended ${file.fileName} to the DOM.`);
  });

  // Append the file list element to the body (or any other container)
  document.body.appendChild(fileListElement);

  console.log("All items have been appended to the DOM.");
}

displayFiles(); // Make sure the function is called

let groceriesList = [
  "apples",
  "milk",
  "protein",
  "chicken",
  "cheese",
  "bread",
  "coffee",
  "sushi",
];

let getTodoList = document.querySelector("#todoList");

groceriesList.forEach((item) => {
  let groceryItem = document.createElement("div");
  groceryItem.textContent = item;

  getTodoList.appendChild(groceryItem);

  console.log(`Appended ${item} to the DOM`);
});
document.body.appendChild(getTodoList);

let movieTimes = [
  {
    movie_Title: "Star Wars",
    show_times: [1800, 1900, 2130, 2215],
    theater: "Kanata",
    total_seats: 100,
    seats_left: 50,
  },
  {
    movie_Title: "Katana One",
    show_times: [1300, 1910, 2145, 2315],
    theater: "WestBoro",
    total_seats: 60,
    seats_left: 50,
  },
  {
    movie_Title: "Toy Story",
    show_times: [1415, 1800, 2300],
    theater: "StittsVille",
    total_seats: 100,
    seats_left: 80,
  },
];

// Create the unordered list element
let movieTimesNode = document.createElement("ul");

// Iterate over each movie and append the details to the list
movieTimes.forEach((movie) => {
  let movieTimesNodes = document.createElement("li");

  // Calculate capacity dynamically
  let capacity = (movie.seats_left / movie.total_seats) * 100;

  // Set the text content of each list item
  movieTimesNodes.textContent = `Movie Name: ${
    movie.movie_Title
  }, Show Times: ${movie.show_times.join(", ")}, Seats Left: ${
    movie.seats_left
  }, Capacity: ${capacity.toFixed(2)}%`;

  // Append the list item to the unordered list
  movieTimesNode.appendChild(movieTimesNodes);
});

// Append the unordered list to the document body
document.body.appendChild(movieTimesNode);

class Employee {
  constructor(employeeID, firstName, lastName, startDate) {
    this.employeeID = employeeID; // Assign to this
    this.firstName = firstName;
    this.lastName = lastName;
    this.startDate = startDate;
  }

  // Example method to get employee details
  getDetails() {
    return `${this.firstName} ${this.lastName}, Employee ID: ${this.employeeID}, started on ${this.startDate}.`;
  }
}

const mark = new Employee(999, "Mark", "Jay", "April 20 2016");
const steve = new Employee(636, "Steve", "Lee", "January 13 2019");

console.log(mark.getDetails());
console.log(steve.getDetails());

/* 
handling events

<<<<<<< HEAD
In JavaScript, an event is something that happens to an object.

Objects have property values, which are values that can be used to describe an object. Property values can be things like size, speed, colour, name, id, etc. String.prototype.length is an example of what are generally referred to as a property.

Objects have methods, which are functions that belong to the object that make something happen. It could be something that the Object can do or something that the object does to another Object. Methods are also properties but are just called methods. Array.prototype.sort() is an example of a method. You can usually tell the difference between them in your code by the parentheses that appear after the name of the method. Properties don't have parentheses.

Events are things that happen to an object. A webpage loads. An anchor tag is clicked. A form is submitted. load, click, and submit are all examples of events.


Adding and Removing Events
All HTML DOM Element Nodes have a built-in addEventListener method. The standard way to add an event to a DOM element is like this:

*/

let h1NodeExample1 = document.createElement("h1");
h1NodeExample1.textContent = "Click Me!";

document.body.appendChild(h1NodeExample1);

function doSomething() {
  h1NodeExample1.style.color = "red";
  return h1NodeExample1;
}
h1NodeExample1.addEventListener("click", () => {
  doSomething();
});

//MAD9022
//MAD90214
=======
let testArray = ["orange", "black", "red", 123];


>>>>>>> ee884d6 (added second js file for debrief)
