let name = "roberto";


let reverseString = function (string) {
    let left = 0;
    let right = string.length - 1;
    let array = string.split("");

    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;

    }

    return array.join("");
}

console.log(reverseString(name));