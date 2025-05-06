// blueprint -> class
// real life entitiy that are prepared using class-> object

// data members -> are the properties
// member function -> behaviour

/**
 * class <name> {
 *  // properties
 * // behaviours
 * }
 */

class Product {
  #name; // it thas private property
  // no need of let, var, const
  //   price;
  //   discount;
  //   desc;

  constructor(n, p, d) {
    this.#name = n;
    this.price = p;
    this.description = d;
  }

  display() {
    // no need of function keyword
  }

  buy() {}

  wishlist() {}
}

const p = new Product("bag", 100, "bagggg");
console.log(p);

// syntax to create an object

// this keyword
// this is referece to the callling context
// in array function this should not refers to calling context

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

// new keayword
// it can create a brand new plane empty object

//contructor should be return an this object if we return a primitive it will be ignore
const obj = new Person("tushar");

// obj.getName();
