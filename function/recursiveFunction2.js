function recursiveLevels(numbers) {
  console.log(`started function: ${numbers}`);
  if (numbers > 0) {
    recursiveLevels(numbers - 1);
  } else {
    console.log(`function call is done`);
  }
  console.log(`funciton recursive level are: ${numbers}`);
}

console.log(recursiveLevels(5));
