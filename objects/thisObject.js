//programming with Objects

let person = {
  firstName: "robert",
  lastName: "aguilar",
  city: "los angeles",
  zip: 90022,
};

let person2 = {
  firstName: "karen",
  lastName: "aguilar",
  city: "watts",
  zip: 90059,

  person() {
    return `first name:${this.firstName} last name: ${this.lastName} city born: ${this.city} zip code: ${this.zip}`;
  },
};

function personPrint(values) {
  return `first name:${values.firstName} last name: ${values.lastName} city born: ${values.city} zip code: ${values.zip}`;
}

console.log(personPrint(person));
console.log(person2.person());
