function Person(firstName, lastName, zipCode) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.zipCode = zipCode;

  this.printPerson = function () {
    return `name:${this.firstName} lastName: ${this.lastName} zip:${this.zipCode}`;
  };
}

const person1 = new Person("robert", "aguilar", 90022);

console.log(person1.printPerson());
