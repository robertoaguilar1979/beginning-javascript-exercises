//class encapsulation

class Person {
    #
    firstName;#
    lastName;#
    age;#
    weight;

    constructor(firstName, lastName, age, weight) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#weight = weight;
    }

    set firstName(firstName) {
        this.#firstName;
    }


}