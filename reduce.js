// Reduce it reduce array into singal value. its ofter used for summing or combining values
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.reduce(
  (accumlator, currentValue) => accumlator + currentValue,
  0
);
console.log(sum);

// reduce right is similar to reduce strart from right
