let arr = [1, 0, 0, 1, 1, 0, 1];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function separate(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (arr[i] == 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

separate(arr);

console.log(arr);

// for of loop
for (let value of arr) {
  console.log(value);
}

// arrays are also custom objects in js
// index of the elements is the key and the element it self is the value

// higher order functions -> higher order takes a function as an argument and then execute that
/**
 * map function
 *
 */

const array = [2, 23, 434, 34];

function squre(el) {
  return el * el;
}

const result = array.map(squre);

console.log(result);

function customMapper(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i));
  }
  return result;
}

function print(el, i) {
  console.log(el, i);
}

const value = customMapper(arr, print);

//sort function

const so = [1, 323, 231, 2, 1, 12, 2, 4];

// filter function
/**
 * filter is also a higher order function
 * filter also loops over the array element
 * filter should always return a boolean, otherwise o/p will be converted to a boolean
 *
 */

/**
 * reduce is a higher order function
 * reduce also takes a function f as an argument
 * what reduce does is, it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and accumulate ther result
 * paricular result
 */

function sum(prevResult, currValue) {
  return prevResult + currValue;
}

const resu2lt = arr.reduce(sum);

console.log(resu2lt);
