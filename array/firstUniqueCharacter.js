let uniqueChar = function (string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (string.indexOf(char) === string.lastIndexOf(char)) return i;
  }

  return -1;
};

console.log(uniqueChar("rroobbert"));
