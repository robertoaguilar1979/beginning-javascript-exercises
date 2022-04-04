//class encapsulation

class Person {
  #firstName;
  #lastName;
  #age;
  #weight;

  constructor(
    firstName = "no first name",
    lastName = "no last name",
    age = 0,
    weight = 0
  ) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#weight = weight;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  get firstName() {
    return this.#firstName;
  }
  set lastName(lastName) {
    this.#lastName = lastName;
  }

  get lastName() {
    return this.#lastName;
  }

  set age(age) {
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  set weight(weight) {
    this.#weight = weight;
  }
  get weight() {
    return this.#weight;
  }
}

let robert = new Person("robert", "aguilar", 42, 160);
let angel = new Person("angel");

console.log(robert.firstName);
console.log(robert.lastName);
console.log(robert.age);
console.log(robert.weight);

console.log(angel.firstName);
console.log(angel.lastName);
console.log(angel.age);
console.log(angel.weight);
