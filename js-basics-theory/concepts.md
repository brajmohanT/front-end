var let const 

var is old practice, dont use this. 
var is hoisted and initialized as undefined , function scoped. can be redeclayered.

Run this program with var and let :
`` 
console.log(x)
let x
 x= 99
 let x =99
 if(true){
     let x =101
     console.log(x)
 }
 
 console.log(x)
``


let::
Block-scoped ({})
Hoisted but in Temporal Dead Zone (TDZ)
Can be reassigned
Cannot be redeclared in same scope

const::
Block-scoped
Must be initialized
Cannot be reassigned
Hoisted but in TDZ

QUESTIONS: 
What is scope. What is function and Block Scope. 
What is Hoisting. What is TDZ.

Scope::
Scope is the area of code where a variable can be accessed.

GLobal Scope - declad outside of any function or block. 
`` let x = 10;

function show() {
  console.log(x);
}

show(); // 10 ``

x is globally scoped . can be accessed anywhare in the program.

Functional Scope -- Variables declared inside a function are only accessible inside that function.
`` function test() {
  let y = 20;
  console.log(y);
}

test();
console.log(y); // ❌ Error
 ``
 var is function scoped. 
 
 Block Scope-- Variables declared inside {} (blocks) are only accessible inside that block.
 
 if (true) {
   let a = 5;
   const b = 6;
 }
 
 console.log(a); // ❌ Error
 console.log(b); // ❌ Error
let & var are block scoped.

Lexical Scope -- Inner functions can access variables from outer functions.
function outer() {
  let msg = "Hello";

  function inner() {
    console.log(msg);
  }

  inner();
}

outer();

//// var vs let
if (true) {
  var x = 1;
  let y = 2;
}

console.log(x); // 1 ✅
console.log(y); // ❌ Error

Scope Chaining:: 
When JavaScript looks for a variable:
1.Current scope
2.Outer scope
3.Global scope
❌ If not found → ReferenceError

NEXT: Read hoisting, TDZ, real Bugs caused by scope/hoisting/TDZ.