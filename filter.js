//FILTER method creats a new array with all elements that pass the test implemented by the provided function
const arr = [1, 2, 3, 4, 5, 6];
const newarr = arr.filter((num) => num % 2 !== 0);
console.log(`${newarr} are a odd number`);
