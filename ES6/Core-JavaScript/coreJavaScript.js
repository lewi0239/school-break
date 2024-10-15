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

console.log(typeof age, typeof nothing);

let a = 0;
let b = "0";

console.log(a === b);
console.log(a == b);
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
Methods in JavaScript

Features: example based on Math.() static methods

Static Methods:	
Access = Belongs to the class itself
Usage = Called on the class, not on instances
State = Does not access instance properties or this
Common Use Case	= Utility or helper functions (e.g., Math.random())

Instance Methods:
Access = Belongs to the instance of the class
Usage = Called on an instance of the class
State = Accesses the instance's properties via this
Common Use Case =  Math.random())	Actions that depend on the instance's state

Constructor Methods:
The constructor method is a special type of instance method that is automatically called when a new instance of a class is created. It is used to initialize the object’s properties.

Prototype Methods:
Instance methods in JavaScript are often referred to as prototype methods, as they are defined on the prototype of a class (or constructor function). All instances of the class share the same prototype, meaning they share the same methods. If a method is defined in the prototype, all instances will have access to it.

Getter and Settor Methods:
Getters and setters are special methods in JavaScript that allow you to define custom behavior when accessing or assigning a property. These methods are useful for encapsulating private data or adding validation logic when interacting with object properties.

*/

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

2.2 Truthiness, Control Flow, Strings
If Statements
if statements are a common construct in most programming languages. Simply put, they are a way to let your program make decisions based on yes - no questions.

*/
if (a == 5) {
  //notice the two equal signs?
}

/* 
The example above shows a simple if statement. Inside the parentheses is where you put the question you want the program to ask. Everything and anything that you place inside the parentheses will be boiled down to a yes or no answer.

When asking questions in if statements, comparison operators are used between the values being compared. Greater than >, less than <, equal to ==, greater than or equal to >= and less than or equal to <=, are the comparison operators.

Sometimes you just want to know if something exists or has a value equivalent to true. (See Truthiness below). We can just put a single variable inside the parentheses to check this. We can also add an exclamaition mark in front of the variable to check for the opposite.


*/

let varX = 5;
if (varX) {
  //varx is a non-zero number and x is not null or undefinded
  // if read this "if x"
}

if (!varX) {
  //x is zero or undefined or null
  //we would this as "if not x"
}

/* 
Else and Else If
When you need to do things based on both the TRUE and FALSE conditions then you can use an if-else statement.

*/

let varY = 10;

if (varY >= 10) {
  console.log("Sometimes numbers can be larger than 10");
} else {
  console.log("hmm.. still smaller than 10");
}

/* 
Two vs Three equal signs
The examples up to this point have all been using two equal signs. This means that we are comparing the values of the two operands.

There is another comparison operator, three equal signs. It compares the two operands to see if they are actually the same object, not just the same value.

*/

let ran1 = 4;
let ran2 = "4";

console.log(ran1 === ran2); //not equal
console.log(ran1 == ran2); //equal

/* 
Ternary Statements
Ternary statements are used as a short-hand for if else statements. When you have an if clause AND and else clause and there is one command to run for each condition, then you can use a ternary operator.

These are often used to assign one of two possible values to a variable.

The basic syntax requires a ? and a :. The expression to the left of the question mark is the question you are asking. Between the question mark and the colon is the value to use or command to run if the question was truthy. The expression that comes after the colon is the value to use or command to run if the question was falsey.
*/

let skyColor = "blue"
  ? "The sky has always been this way"
  : "Wait.. the sky isn't blue??";

/* 
 
 Switch Case Statements
If you had an if statement that was going to compare a variable to a finite list of possible values then a useful alternative to all those parentheses and curly braces might be a switch case statement.

Let's say that we have a variable called someName which contains a name. If the name is one of six possible values then we want to do something specific, tailored to that name. If it is not one of the six then we have a generic thing to do.

We use the keyword case to provide a comparison value for someName. Whatever commands that come after a matching case value will run until a break command is encountered.

You can have a list of possible matches written as a series of case statements written one after another with no break between them.
 
 */
let day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("its a weekday..");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Yeah its a weekend!");
    break;
  default:
    console.log("hmm weird.. this is not a day of the week");
}

/* 
Strings
A String is a primitive value made up of letters, numbers, and punctuation, wrapped in quotation marks.

There are three possible quotation marks that you are allowed to use in JavaScript.
single qoute
double quote
template literal
*/

let myCity = "ottawa"; //double string
let myCountry = "canada"; //single

console.log(`My city is ${myCity} & my country is ${myCountry}`); //template literal

let personName = "Bree"; //global variable

/*
String Methods
As we already mentioned, Strings in JavaScript are a Primitive datatype.

However, JavaScript also has an Object of type String. When you create a variable and assign a string value to that variable, then JS will quietly create one of these String Objects in the background for you.

This allows us to use the length property and all the String methods like trim, indexOf, split, toUpperCase, toLowerCase, padStart and many others.


Javascript String Methods:
"Hello".charAt(4)             =>  o
"Hello".concat("", "world")   =>  Hello world
"Hello".startsWith("H")       =>  true
"Hello".endsWith("o")         =>  true
"Hello".includes("x")         =>  false
"Hello".indexOf("l")          =>  2
"Hello".lastIndexOf("l")      =>  3
"Hello".match(/[A-Z]/g)       =>  ['H']
"Hello".padStart(6, "?")      =>  ?Hello
"Hello".padEnd(6, "?")        =>  Hello?
"Hello".repeat(3)             =>  HelloHelloHello
"Hello".replace("llo", "y")   =>  Hey
"Hello".search("e")           =>  1
"Hello".slice(1, 3)           =>  el
"Hello".split('')             =>  ['H', 'e', 'l', 'l', 'o']
"Hello".substring(2, 4)       =>  ll
"Hello".toLowerCase()         =>  hello
"Hello".toUpperCase()         =>  HELLO
" Hello ".trim()              =>  Hello
" Hello ".trimStart()         =>  "Hello "
" Hello ".trimEnd()           =>  " Hello"
*/

function fn1() {
  let age = 25; //block scoped and visible anywhere inside this function
  if (age > 17) {
    let isAdulting; //block scoped inside this if statement
    isAdulting = true;
    // name, age, and is Adulting are all visible here
  }
  //name and age are visible here, but NOT is Adulting
}

/* 
The Math Object:
JavaScript has a Math object which can carry out most common mathematical operations. If you need to round numbers up or down, complete Trigonometric calculations, determine which is the largest or smallest number, create a random number, determine if a number is positive or negative, or access the value of Pi. All of these things can be accomplished with the Mathematical methods.

These methods all begin with the Math object name:

Math.round(num); //returns the next highest or lowest integer depending on its decimal value.
Math.floor(num); //always rounds down to the next lowest integer
Math.ceil(num); //always rounds up to the next highest integer
Math.random(); //returns a random value between 0 and 1.
Math.max(list, of, numbers); //returns the largest number from the list
Math.min(list, of, numbers); //returns the smallest number from the list
Math.abs(num); //returns the absolute value of the number
Math.sign(num); //returns 1, -1, 0, -0, NaN to tell you if the number is positive or negative
Math.sin(radians); //returns the sine value for the provided radian value
Math.cos(radians); //returns the value of Cosine for the provided radian value
Math.tan(radians); //returns the value of Tangent for the provided radian value
Math.PI; //Use this as if it were a variable holding the value of Pi
*/

let maths1 = 445.413;
let maths2 = 445.413;
let math3 = 445.4;
let maths4 = 445.7;
let maths5 = Math.random() * 10;
let maths6 = Math.max(1, 2, 3, 4, 5);
let maths7 = Math.min(1, 2, 3, 4, 5);
let maths8 = Math.max(1, 2, 3, 4, 5);
let maths9 = () => {
  return Math.abs(a - b);
};

let maths10 = console.log(Math.round(maths1)); //445

/* 

NaN
Not A Number (NaN) is an Object in JavaScript that represents a value that is "Not A Number". You only get this value when you are trying to run a Number or Math that requires a numeric value.

There is also a global method isNaN(), which is specifically designed to check if the value in a variable is a numeric one. Just pass a value or variable to the method and it will run the test and return a boolean.

It returns true if the variable value is NOT numeric and false if the value IS a numeric one



*/

const nameGen = "brodie";

nameGenCheck = () => {
  isNaN(nameGen) ? console.log("its a string") : console.log("its a number");
};
nameGenCheck();

/* 
JavaScript Date Objects
If you were writing HTML then you could add a <time> element and write a string that represents a Date. However, this would not be an object that you could use in your script. JavaScript comes with a Date object that you can actually manipulate, convert to different times, calculate time differences, and work with just the time or just the date value.

There is a new Temporal object that is under development. It will give us a lot more control over things like time zones, time ranges, and international formatting. Until that happens, we still have a basic Date object that we can use for all our basic needs.

There are actually a few different ways that you can call the Date constructor method.


*/

// Classes and Objects
// Classes are the cookie cutters, objects are the actually cookie

let today = new Date(); //todays date
let date1 = new Date("28/9/2016 14:30:00.000"); //a formatted string
let date2 = new Date(2016, 9, 28, 14, 30, 0); // yyyy, mm, dd, hours, mins, seconds
let date3 = new Date(1500000000000); //a timestamp with the number of milliseconds since Jan 1 1970, 12am
console.log(today);
console.log(date1);
console.log(date2);
console.log(date3);

/* 
The first line above will create a new Date object and it will fill it with the current date and time from the computer that is running the script.

The second line creates a new Date object and sets a specific date and time. We pass in a String with a valid date and time. The values for day, month, year, hour, minutes, seconds, and milliseconds would be set inside our Date object. The String that is passed in must be a date string that would be recognized by the Date.parse( ) method. See here for examples(opens new window)

The third line accepts up to seven arguments for the parts of the Date. The last argument is the milliseconds. dt2 will contain the same date as dt1 from the example code.

The last line accepts a timestamp, which is the number of milliseconds since the start of the Unix Epoch -> Jan 1, 1970 00:00:00.000Z. In July of 2017 we passed the 1.5 Trillion mark for milliseconds in the current timestamp. You can pass any number to this method to set the time and date inside the Date object.

*/

console.log(today.getDay());

today.setHours(12); // Set hours from 0-23
console.log("After setting hours to 12:", today);

today.setMinutes(3); // Set minutes from 0-59
console.log("After setting minutes to 3:", today);

today.setSeconds(50); // Set seconds from 0-59
console.log("After setting seconds to 50:", today);

today.setMilliseconds(123); // Set milliseconds from 0-999
console.log("After setting milliseconds to 123:", today);

today.setFullYear(2044); // Set the full year to 2044
console.log("After setting year to 2044:", today);

today.setMonth(0); // Set the month to January (0 represents January)
console.log("After setting month to January (0):", today);

today.setDate(1); // Set the day of the month to 1 (if no argument is provided, it defaults to `1`)
console.log("After setting date to 1:", today);

// Using Date.UTC to create a timestamp
let utcDate = Date.UTC(2044, 0, 1, 12, 3, 50, 123); // Date.UTC(y, m, d, hr, min, sec, ms)
console.log("UTC timestamp for 2044-01-01 12:03:50.123:", utcDate);

// Convert the UTC timestamp back to a Date object for display
let utcDateObject = new Date(utcDate);
console.log("UTC Date object:", utcDateObject);

/* 
Retrieving Date Values
If you want to retrieve any part of the date or time then you can use the matching "get" methods. Start with using your Date variable and then call the method on the variable

*/

today.getHours();
today.getMinutes();
today.getSeconds();
today.getMilliseconds();
today.getFullYear();
today.getMonth(); // value from 0 - 11
today.getDate(); // value from 1 - 31
today.getDay(); //day of week Sunday (0) - Saturday (6)

Date.now(); //Using the Date object, call now( ) to get a timestamp
//which is the number of milliseconds since the start of the UNIX Epoch
//midnight January 1, 1970

/* 
Outputting Dates
There are many methods for outputting the date object's value. Here is a list of the various methods.

*/
today.toDateString(); //returns the date portion in human readable format
today.toTimeString(); //returns the time portion in human readable format
today.toISOString(); //returns a string in simplified extended ISO format
today.toJSON(); //converts the date to a string intended to be used in JSON
console.log(today.toJSON() + " " + "im a json");
today.toLocaleDateString("en-CA"); //returns a string representation based on the
//computer's locale settings or provided locale
today.toLocaleString("en-GB"); //same thing effectively
today.toLocaleString("en-US");

/* 
Working With Months
In the JavaScript Date object, months are stored as a number between 0 and 11.

If you want to see or use the name of the month then you need to create your own array of the month names and use the Date object month as the index for that array.

*/

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let todayWithArray = new Date();
console.log("Current month is:", months[todayWithArray.getMonth()]);

/* 
loops, for in loop, for of loop, while loop, infinite loops, do while loop, and for loops


*/

/*
The Object datatype is the base object that is used to create all other non-primitive datatypes in JavaScript. While this may sound quite abstract, you will actually be creating many Objects of your own.
*/
// the object constructor
let myObj1 = new Object(); //creates an empty object

//an object literal
let myObject2 = {};

function DoIt() {} //instead of returning undefined, it returns an object of type DoIt

let myObj3 = new DoIt();

// The class syntax to define an object plus calling its constructor

class myApp {
  constructor() {}
}
let myObj4 = new myApp();

/* 

The most common is the object literal syntax, where you are literally writing out what the object contains. Here is an object literal with 5 properties - 3 properties are just values (like primitive variables) and 2 are methods (like function expressions).

*/

let wizzard = {
  wizzardFirstName: "Harry", //string property
  wizzardLastName: "Potter", //string property
  isWizzard: true, //boolean property
  speak: function () {
    console.log(`You're a wizzard ${wizzard.wizzardFirstName}.`);
    //You're a wizzard Harry
  },
  mainSpell: function () {
    console.log("Levi-oh-sa");
  },
};
wizzard.speak();
console.log(wizzard.mainSpell(), wizzard.wizzardFirstName);

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
// Output: Mark Jay, Employee ID: 999, started on April 20 2016.

/* 
Prototypes:
Every type of Object has a prototype. A prototype is a special kind of an object that contains all the methods that will be shared by all Objects of that type.

JavaScript has something called the prototype chain, which is how inheritance works in JavaScript. Each one of the Object prototypes will have a connection to the prototype object belonging to it's parent object. At the top of the chain is the prototype of the Object object.

As an example, look at the toString() method. When you create an Array (opens new window), there is no method in Array called valueof. However, you can write the following and no error occurs.

*/

/* 
Square Brackets vs Dot Notation:

The first way we access any property or method in an object is with dot notation. That means putting a period between each object name and property name.


*/

let vehicle = {
  make: "BMW",
  year: 2014,
};

vehicle.year;
console.log(vehicle.make + " " + vehicle.year);

//There is an alternative syntax that uses square brackets.

let objBubba = {
  name: "Bubba",
  age: 44,
};

objBubba["name"];
objBubba["age"];

console.log(objBubba["name"]);

/* 

Note the quotation marks around the property names. All Object property names (for our purposes) will be Strings.

So, why the two approaches? - With the square brackets we can put a variable inside the brackets instead of a string

*/

let n = "name";
let ag = "age";

objBubba[n]; // has the value 'Bubba'
objBubba[ag]; // has the value 44

//obj.n; // this would fail because JS would look for obj.n or obj['n']
//obj.ag; // this would fail because JS would look for obj.a or obj['a

/* 

As a best practice, when you are going to change an object by updating the value of a property, deleting a property, or adding a new property, then you should check to see if that property already exists.

There are two ways that we can check for the existence of a property on any object. We can use the in operator or the hasOwnProperty() method. The in operator is the simplest and shortest to write.

*/

let cube = {
  width: 8,
  height: 8,
  depth: 9,
  ref: 11123,
  temp: null,
};

if ("depth" in cube && cube.depth >= 8) {
  console.log("this number is larger than 8");
} else {
  console.log(cube.depth);
}

if (objBubba.hasOwnProperty("width")) {
}

/* 
Deleting Properties from Objects
When you are done with a property and want to get rid of it there are two things we can do. First, to permanently delete the property, we use the delete keyword.
*/

delete cube["ref"];
cube["temp"] = 420;

/* 
Nested Loops for Complex Objects
There will be times when you have a complex object that has arrays nested inside of arrays. When you need to loop through all of the elements at every level, we will use a nested loop.

Take this data as our example:

*/

let playerInventory = {
  slots: [
    { ammo: ["pistol", "sniper", "rockets"] },
    { health: ["megaHealth", "smallHealth", "healOverTime"] },
  ],
};

// Iterate through the slots
for (let i = 0, numSlots = playerInventory.slots.length; i < numSlots; i++) {
  let currentSlot = playerInventory.slots[i]; // Access each slot (either ammo or health)

  // Iterate through the keys (ammo or health) in the current slot
  for (let key in currentSlot) {
    console.log(`Slot Type: ${key}`); // Print whether it's ammo or health

    // Access the array under ammo or health
    for (let x = 0, numItems = currentSlot[key].length; x < numItems; x++) {
      console.log(`\tItem: ${currentSlot[key][x]}`); // Print each item inside ammo/health
    }
  }
}
