// this function checks to see it this word is a palindrome.

let isPalindrome = function (word) {
    let backwardWord = "";
    for (let i = 0; i <= word.length - 1; i++) {
        backwardWord = word[i] + backwardWord;
    }
    return word.toLowerCase() === backwardWord.toLocaleLowerCase();

}

console.log(`is "hello" a palindrome? ${isPalindrome("hello")}`);
console.log(`is "racecar" a palindrome? ${isPalindrome("racecar")}`);
console.log(`is "radar" a palindrome? ${isPalindrome("radar")}`);