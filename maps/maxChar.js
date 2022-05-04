let string = "rrooobbbbert";


let maxChar = function (string) {
    let hash = new Map();
    let maxChar = -Infinity;
    let findChar = "";

    for (const char of string) {
        if (hash.has(char)) {
            let add = hash.get(char);
            add += 1;
            hash.set(char, add)
        } else {
            hash.set(char, 1);
        }
    }

    for (const [key, value] of hash) {
        if (value >= maxChar) {
            maxChar = value;
            findChar = key;
        }

    }

    return findChar;
}



console.log(maxChar(string));