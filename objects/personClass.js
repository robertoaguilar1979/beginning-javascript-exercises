//creating a person class


class Person {

    constructor(firstName, lastName, age, weight) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.weight = weight;
    }

    name() {
        return `hello ${this.firstName} ${this.lastName} ${this.body()}`
    }

    body() {
        return `your age is ${this.age} and you weigh ${this.weight}lbs`
    }


}

let robert = new Person("robert", "aguilar", 42, 162);
let karen = new Person("karen", "aguilar", 42, 0);



console.log(robert.name());

console.log(karen.name());