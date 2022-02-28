let array = [1, 2, 3, 4, 5, 6, 7];
let leftIndex = 0;
let rightIndex = array.length - 1;

while (leftIndex < rightIndex) {
  [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];

  leftIndex++;
  rightIndex--;
}
console.log(array);
