//this is how to use a for in loop to traverse an objects key and value.

let employees = {
    name: "robert",
    age: 43,
    city: "los angeles"
};


for (let i in employees) {
    console.log(`key:${i} value:${employees[i]}`);
}