// forEach it execudes a provided function once for each array elements, it does not return a new array.

const arr = [1, 2, 3, 4, 5, 6];
let newarr = arr.forEach((num) => {
  num = num + 20;
  console.log(num);
});
