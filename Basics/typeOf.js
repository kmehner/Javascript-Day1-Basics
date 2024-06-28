
// TYPEOF COMVERISON: Used to determine the data type of a variable or value.
// The typeof operator returns a string indicating the type of the operand.

let name = "John";
console.log(typeof name); // string

// NOTE: we need to be mindful of loose equality (==) and strict equality (===) when comparing data types.
// Loose equality (==) performs type coercion, while strict equality (===) does not.
// Type coercion is the process of converting value from one data type to another.

console.log(typeof 42); // Output: "number"
console.log(typeof "Hello, world!"); // Output: "string"
console.log(typeof true); // Output: "boolean"

// NOTE: The typeof operator returns "object" for objects, arrays, and null.

console.log(typeof { name: "John", age: 30 }); // Output: "object"
console.log(typeof [1, 2, 3]); // Output: "object"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"

console.log(5 + "5"); // Output: "55" (Number to String Conversion)
console.log("10" - 5); // Output: 5 (String to Number Conversion)
console.log("true" == true); // Output: true (String to Boolean Conversion)
console.log(+"100"); // Output: 100 (String to Number Conversion)

console.log(0 == false); // Output: true
console.log("" == false); // Output: true
console.log(0 === false); // Output: false (Strict Equality Check)
console.log("" === false); // Output: false (Strict Equality Check)
