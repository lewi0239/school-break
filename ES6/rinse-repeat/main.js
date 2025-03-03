//Fetch

async function getrandomAPI() {
  const url = "https://example.org/products.json";

  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Response status: ${Response.status}`);
    }

    const json = await reponse.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}

//Primitive Types
/* 
String
Number
BigInt
Symbol
Null
undefinded
boolean

Complex Types
Array Object function

*/

//array methods
//Date 3/3/2025

// 1. Push Method:
/*Adds one or more elements to the end of an array and returns the new length */
const fruits = ["apple", "banana"];
console.log(fruits.join(", ") + " " + "this is original array");
fruits.push("orange"); //add orange to
console.log(`${fruits} has been pushed!`);

//2. Pop method:
/*Removes the first element from an array and returns that element */
fruits.pop(); //removes oranges
console.log(`${fruits} has been popped!`);

//3. Shift:
/*Removes the first element from an arrau and returns that element*/
fruits.shift(); // removes apple
console.log(`${fruits} has been shiffted`);

//4. UnShift:
/*Adds one or more elements to the begging of an array and returns the new length */
fruits.push("lemon"); //adds lemon
fruits.unshift("mango"); //adds mango
console.log(fruits);

//5. Filter
/*Creates a new aray with all elements that pass the test implemented by the provided function */
let stockPrices = [15.55, 22, 300, 65];

const even = stockPrices.filter((stock) => stock % 2 === 0);
console.log(even);
