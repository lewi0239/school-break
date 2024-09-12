/* 
What is Core JS?
ECMA is the standard that defines the capabilities of a programming language

JavaScript is the actual language which is the implemented version of ECMAScript

There are different JavaScript Engines that are used to interpret and run that JavaScript files. 
THe two most prevalent are V8 Chrome from Google an Webkit from Apple. The V8 Chrome engine is
used in Chrome, edge, Opera, Brave, and Nodejs, as well as a number of other smaller browsers 
*/

//To create variables in JavaScript there are three keywords that we can use

var old;
let name;
const PI = 3.14;

//The first two lines in this example we are declaring a variable. This is what the
// process of creating the storage space for the value and giving it a label is called.

//JavaScript programming languages will insist that you tell them what kind of info
//is going to be stored in the variable and will only let you use that one kind of of info
// in the variable after it is declared.
//JavaScript lerts you change the kind of infomraiton (DataType) at any point.
//There are two groups of Data Types in JavaScript: Primitive and objects.
// If your datatyep is not a primitive then its automatically an object.

//Primities are just a value:

//objects can have properties, methods, and valu es/events:

//The primitive types in JavaScript are:

/* 
1. String: a sequence of characters that are used to represent text.
2. Number: a numeric value
3. Boolean: a true or false value
4. Undefine a variable that has not been assigned a value
5. Null: a variable that has been assigned a value of null
6. Symbol: a unique value that's not equal to any other value
7. BigInt: a numeric value that can represent integers of arbitrary length

If a variable does not hold one of these things then it is automatically an object.


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

//object example

let humanMale = new Object({
  Fname: ` lewis`,
  class: `coder`,
  income: (hours, dollars) => hours * dollars,
  favouriteColor: "green",
});

console.log(humanMale);
console.log(typeof humanMale);
console.log(humanMale.Fname);

let get2WeeksPay = humanMale.income(80, 16.55);

console.log(humanMale);
console.log(`$${get2WeeksPay}`);

/* 
Functions are series of commands that get bundled together 
so that tehy can be run, in that order, onve or multiplke times

functions can be passed information when they are called on to run.
They can call other functions to maake them run. They can also return some type 
of resulting value when needed.

Functions nearly, all habve a name, just like variables, so you can references them when you need them to run

Functions have arguements and peramaters:

An argument is a value that is passded to a function. The goals for writing functions is to make them pure
This partly means that they should always returnb the same results if you give them the same input values
Those input values are the arguments 

By having arguments for our functions, we gain flexibility and reuse
Reuse menas writing less code

parameters are global variables that the function can acess, there are two kind of special sytntax: Default parameters
and rest parameters:

Rest:
The rest parameter syntax allows us to reperesent an indefinite number of arguments as an array

In the following example, the function multiply uses reset parameters to collect arguments from the second
one to the end. The function then multiplies these by the first arugment



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
goodBye("brodie", "see you later");
open();
close(10);
next(hello);

console.log(goodBye);

//There are two ways to define your function, withj a declaration or an expression

f1();

function f1() {
  return 1 + 1;
}

const f2 = function () {};
f2();

//IIFE (immediately invoked function experession)
//JavaScript wants to run this first

(function f3() {})();

//Return Statements
// If a function does not contain the return keyword then, by default it returns undefined
// if a function does have a return keyword then as soon it is encountered, the function stops runnings and it
//returns whatever single value you put after return

let valuesAfterReturn = () => 1 + 2 + 3;

console.log(typeof valuesAfterReturn);

function multiply(multiplier, ...theArgs) {
  return theArgs.map((i) => multiplier * i);
}

const arr = multiply(5, 10, 2, 5);
console.log(arr); //50, 10, 25

/* 
Arrow Functions:
An arrow function expression is a compact alternative to a tradtional funciton expression, with some semantic 
differences and deliberate liminiations in usage

Arrow functions dont have their own bidings to this, arugments, or super, and should not be used as methods

Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also dont have access
to the new.target keyword

Arrow functions cannot use yield within their body and cannot be created as geneerator functions

*/
const f4 = function (num) {
  return num + 2;
};

const f4Arrow = (num) => {
  return num + 2;
};

const f4shrtArrow = (num) => num + 2;

const f4noArrg = () => 1 + 2;

/*
Variable Scope and Hoisting:
Scope is a term used to describe where a variable is visible (can be accessed from). With either 
let or const we have the same options for scope. A variable can be in the global scope or in block scope
A block scope is created whereever you write {}. Inside the curly braces and does not exist outside them.

Functions all (except some arrow functions) have a set of curly braces. So, functions all have their owb block
scope. There can be other control structures like if statements or loops that also create blocks. Each of these 
blocks is a new scope to declare variables.

Variables that are declared outside of any function are said to be in the global scope. They are visible anywhere in your code.

Hositing is an effect that happens to variables and functions in JavaScrip when the script is read for the 
first time by the JavaScript engine. When you run a script, it is actually being read twice. One to identify
all the functions and variables and determine their scope, and a sceond time to execute the code.

Variable declarations are idenftied with the first pass. The exitence of the variable is hoisted to the top
of their scope. They cant be used fro anywhere but the JavaScript engine is aware of their existence
When you get to the line that declares the variable the default undefined value is assigned to the variable

So, function expressions can be assigned to variables. The expressions itself does NOT get hoisted. The 
Variable name is what gets hoiste o the top of its scope.



*/

/*
Document Object Model:
When the browser reads an HTML file it creates an Object model representing all the content
on the page. It builds a tree structture that helps it to know which elements are nested
inside each other, which elements are parents and which are children.

This is a visual representation of how a browser sees the page. You can think of each indent as the start of a new branch in the DOM tree. Inside the html object, there are two children - head and body. Inside the head are two more children - title and link. Title has a child, which is #textt. The link element has no children. Inside body > header > h1 there are two children - img and #text. The img and the #text are siblings:

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

I ned to be al to visualize everypage in this manner. Understand when you are searching for things or aletering things that you will be working with parents, children, and sibilings.

One of the things that sets Nodejs and JavaSript in the browser apart is the DOM. NodeJs does NOT have acces to the DOM.

The DOM is NOT part of core JavaScript

The DOM is an add-on that broowsers get as part of the window object

Node and Elements:

Each of of things listed above, in the DOM diagram, is a Node. Tere are serveral kinds of types of nodes, including ElementNode, TextNode, DocumentFragement, and comment. There are others but these are, by fare, the most common.


There are node properties and methods which work on all types, some that work only on Element nodes, and some that work only on Text nodes.

Attributes any DOM Element you can add or read attributes. Many of the attributs that you write in your HTML will have a correspoding attribute in JavaScript. Eg: if your element in the HTML has an id attribute, then when you refrence that element in your JS, it will have an id property


THe DOM

One of the obejcts inside window that you will acess most is the document object. It contains all the methods and properties for working with HTML and css through JavaScript


It is important to remember that there are two main types of Nodes in the DOM - TextNodes nad ElementNodes.

Some of the properties and methods that you use will be looking at Nodes and some will be looking at ElementNodes. The genral object type Node refers to both kinds, whereas Element nodes refer just to the tags like <p>, <div>, or <ul>
*/

let h1 = document.querySelector("h1");
console.log(h1.textContent);

let getMyCarID = 000123;

function displayId(getMyCarID) {
  let p = document.createElement("p");

  p.document.textContent = `<p>${getMyCarID}</p>`;

  document.body.appendChild(p);
}

displayId(getMyCarID);

function displayId() {
  let myFileArray = [
    {
      fileName: "2024-revenue",
      size: "24kbs",
      token: 001,
      department: "finance",
    },
    {
      fileName: "2020-marketing",
      size: "1mb",
      token: 002,
      department: "marketing",
    },
    {
      fileName: "2023-it-security-plan",
      size: "50mb",
      token: 003,
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

displayId(); // Make sure the function is called

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
