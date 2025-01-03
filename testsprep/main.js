/* 
CSS & HTML:

*/

//CSS specificty

/* 

The selector weight categories are listed here in the order of decreasing specificity:

ID column:
-Includes IDS
CLASS column:
-Includes class selectors, such as .myClass, attribute selectors like
TYPE column:
Includes type selectors, such as p, h1, and td, and pseudo-elements like ::before, ::placeholder, and all other selectors with double-colon notation. For each type or pseudo-element in a matching selector, add 0-0-1 to the weight value.


*/

let n = 20;

for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) {
    console.log(`${i}: Fizzbuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}: fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i}: buzz`);
  } else {
    console.log(`${i}`);
  }
}

let x = 100; // Upper limit

for (let a = 2; a <= x; a++) {
  // Start at 2 (smallest prime number)
  let isPrime = true;

  // Check if 'a' is divisible by any number from 2 to sqrt(a)
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      isPrime = false; // Not a prime number
      break; // Exit the loop early
    }
  }

  // If 'a' is prime, print it
  if (isPrime) {
    console.log(a);
  }
}

let num = 29;
function getPrime(num) {
  if (num < 2) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(getPrime(num));
