var score = 9;

let mark = 80;

const grade = 1000;

var a;

// console.log(a);

/**
 * number, string,
 * boolean, null, undefined, object, symbol
 * \n new line
 * \t tab
 */

/* 
    falsay values in js
    0, -0, "", null, undefined, NaN
*/

/* 
    if in && operation if first value is falsy then it will not check the second value it returns the first value
    if in && operation if first value is truthy then it will check the second value it returns the second value


    if in || operation if first value is truthy then it will not check the second value
    if in || operation if first value is falsy then it will check the second value
 */

console.log(42 && 2); //2

console.log(33 || 3); //33

// interesting numbers 0, -0, NaN (not a number)

if (score > 10) {
  return NaN;
}

console.log(NaN === NaN); // false

console.log(Infinity / Infinity); // NaN

// BitWise Operators
/*
    & -> bitwise and
    | -> bitwise or
    ^ -> bitwise xor
    ~ -> bitwise not
 */

// Equality Operators
// == -> abstract Quality Operator,
// === -> strict equality operator
// == -> it checks the value and type if type is different it will convert the type and then check
// === -> it checks the value and type if type is different it will not convert the type and then check

console.log(typeof 1); // number
console.log(typeof "1"); // string

console.log(typeof null); // object

console.log(typeof undefined); // undefined