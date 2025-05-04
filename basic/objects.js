let x = { name: "tushar", age: 21 };

// console.log(x["name"]);

x.name = "vicky";

// how to add a new property to an object
x.marks = 100;

//delete a key value
delete x.age;

// console.log(x);

// counting a frequecy of string

const word = "javascript";
const freq = {};

for (let letter of word) {
  if (freq[letter]) {
    freq[letter] += 1;
  } else {
    freq[letter] = 1;
  }
}

// console.log(freq);

// string Interpolation using backticks

console.log(2 + "3");

console.log(2 - "2");

// type conversion
