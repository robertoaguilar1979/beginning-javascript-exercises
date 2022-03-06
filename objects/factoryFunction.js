//this is a factory function

function createPerson(firstName, lastName, city, zipCode) {
  return {
    firstName,
    lastName,
    city,
    zipCode,
    hello() {
      return `hello ${this.firstName} ${this.lastName}`;
    },
  };
}

let person1 = createPerson("robert", "aguilar", "los angeles", 90022);

console.log(person1);
console.log(person1.hello());
console.log(person1.zipCode);
