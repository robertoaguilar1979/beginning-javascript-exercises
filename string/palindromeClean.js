let isPalindrome = function (string) {
  let sanitize = string.replace(/[^/w']/gi, "").toLowerCase();

  return sanitize.split("").reverse().join("") === sanitize;
};

console.log(isPalindrome("radar"));
