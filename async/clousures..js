function process() {
  let i = 0;
  let j = [1, 2, 3];
  function innerProcess() {
    i += 1; //closures in memoery called clousure it should be remember
    // make them persistent storage
    console.log(j);
    return i;
  }
  return innerProcess; /// not calling only returning
}

/**
 *
Closure (process) {i: 0}
Script {_clientSettings: {…}, obj: {…}, x: ƒ}
Global {window: Window, self: Window, document: document, 
 */

let res = process(); /// which can return a another function
console.log(res());

/**
 * in that the outer function should be executed
 * but still inner function should not
 * but inner function has get the access
 * of the some variable from the socpe of the
 * outer function that can still access to
 * that function by this is called the closures
 * beacuase it can be store in the memory as a scope of the
 * function
 */

let original = { name: "John", address: { city: "Pune" } };
let shallowCopy = { ...original };

shallowCopy.name = "Doe"; // ✅ Only affects the copy
shallowCopy.address.city = "Mumbai"; // ❌ Also changes original.address.city

console.log(original.name);
console.log(original.address.city); // "Mumbai"

const obj = { name: "tushar" };
const obj2 = obj; // obj and obj2 should be share same references
console.log(obj2);
