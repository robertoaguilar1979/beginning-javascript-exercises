class Person {
  constructor(firstName, lastName, zip) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.zip = zip;
  }

  printPerson() {
    return `hello ${this.firstName} ${this.lastName} your zip code is: ${this.zip}`;
  }
}

let person1 = new Person("robert", "aguilar", 90022);

console.log(person1.printPerson());
