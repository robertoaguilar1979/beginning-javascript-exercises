//this runs until the user either types in yes or no.

let string = "";

while (!(string === "yes" || string === "no")) {
    string = prompt("if you type yes or no this stops")
}