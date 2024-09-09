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
