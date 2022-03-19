let names = ["robert", "angel", "nami", "karen", "neil", "frida", "zella", "zoren", "robert", "angel", "karen"];

let ifDouble = function (array) {
    let double = new Map;
    let single = new Map;

    for (const string of array) {

        if (single.has(string)) {
            double.set(string, true)
        } else {
            single.set(string);
        }
    }
    return double;

}


console.log(ifDouble(names));