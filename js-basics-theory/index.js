// 
//JS Basics:
// 7 Primitives in js. numbers, string, null, undefined, boolean, BigInt, Symbol.
// Primitives are immutable and stored by value. 
// Non Primitives (store by reference): Array, Objects, Function, Date, Map/Set, 

// ? Diff b/w null and undefined: 
// -------undefined----
// Default value for uninitialized variables
// Returned when something is missing
// JavaScript assigns it automatically
// let obj = {};
// console.log(obj.key); // undefined
// let x; console.log(x); //undefined
// 
// --------Null------
// Assigned manually by the programmer
// Represents an empty or cleared value
// Intentional
// 
// --------Type Coerse---------
// Type coercion = JavaScript automatically changing data types to perform operations
// "5" + 2
// "52"  → number 2 is coerced into a string
// 
// "10" - 3
// 7  → "10" is coerced into a number
// 
// if ("hello") {
//   console.log("truthy");
// }

// 0 == false      // true ❗
// null == undefined // true ❗
// 0 === false     // false ✅
// 
//Explicit
// Number("5");     // 5
// String(10);      // "10"
// Boolean(1);      // true

