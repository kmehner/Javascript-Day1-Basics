
/*

Types of variables
 Var, Let, Const

 Var: 
 - Generally avoided but still useful sometimes (Let and const were introduced in ES6 and are preferred)
 - FUNCTION SCOPE - they are accessible throughout the function in which they are delcared 
  - Can be redeclared and updated in the same scope without generating an error
  - Subject to HOISTING - they are moved to the top of the function or global scope

  Let:
  - Declare block-scoped variables -> block-scoped variables are only accessible within the block in which they are declared
  - Cannot be redeclared in the same scope
  - Can be reassigned
  - Not subject to hoisting -> they are not accessible before their declaration in the code 

  Const:
  - Block-scoped variables that cannot be reassigned
  - Constant must be assigned a value when declared and this value cannot be changed later 
  - Not hoisted 

  */

// Variable delcaration and assignment 
var ourName = "Coding Temple";
let greeting = "Hello";
const PI = 3.14; 

/* DATA TYPES
- Strings: Text enclosed in single or double quotes.
- Numbers: Numeric values, including integers and floating-point numbers.
- Booleans: Represents true or false values.
- Arrays: Ordered collections of data.
- Objects: Key-value pairs representing complex data structures.
*/


// Data types 
let personName = "John"; // String
let numCats = 30; // Number
let isHappy = true; // Boolean
let likedFruits = ["apple", "banana", "orange"]; // Array
let personComplete = { name: "Alice", age: 25 }; // Object

//  Javascript determines the data type DYNAMICALLY - the data type of a variable is determined at runtime
/* PRIMITIVE DATA TYPES
- String: Represents text data.
- Number: Represents numeric data.
- Boolean: Represents true or false values.
- Undefined: Represents an undefined value.
- Null: Represents an empty value.
- Symbol: Represents a unique value.
*/

// OBJECT DATA TYPE: Represents complex data structure. A collection of key-value pairs where keys are strings 
// and values can be of any data type.
let alice = {name: "Alice", age: 25};

// ARRAY DATA TYPE: subtype of object data type 
// Ordered collection of data. Each element in an array is assigned a unique index starting from 0.
// It's variables are recognized as OBJECTS
let numbers = [1, 2, 3, 4, 5];

// FUNCTION DATA TYPE: subtype of object data type
// Represents a reusable block of code that can be executed multiple times.
// The variable's data types are recognized as FUNCTION

function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");

// OPERATORS: Used to perform operations on variables and values.
/* 
- Arithmetic Operators: +, -, *, /, %
  The % operator is used for finding the remainder of a division operation (also known as the modulo operator).
- Assignment Operators: =, +=, -=, *=, /=, %=
- Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
  The == operator checks if two values are equal in value, but it performs type coercion (We will get more into this) if the types are different.
  The === operator checks if two values are equal in both value and type.
  The !== operator checks if two values are not equal in value or type.
- Logical Operators: &&, ||, !
  The && (logical AND) operator returns true if both operands are true.
  The || (logical OR) operator returns true if at least one of the operands is true.
  The ! (logical NOT) operator returns the opposite of the operand.
*/

/* TRUTH TREE
  T && T = T
  T && F = F
  T || F = T
  F && F = F
  F || F = F
*/

let a = 5;
let b = 3;
let total = a + b; // Addition
let isAGreaterThanB = a > b; // Comparison
let isItValid = true && false; // Logical

// Finishing by showing the printing 

// Declare variables
let name = "John";
let age = 30;
let isStudent = true;
let fruits = ["apple", "banana", "orange"];
let person = { name: "Alice", age: 25 };

// Output variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Fruits:", fruits);
console.log("Person:", person);

// Perform arithmetic operation
let x = 5;
let y = 3;
let sum = x + y;
console.log("Sum:", sum);

// Perform comparison
let isGreaterThan = x > y;
console.log("Is x greater than y?", isGreaterThan);

// Perform logical operation
let isValid = true && false;
console.log("Is it valid?", isValid);

