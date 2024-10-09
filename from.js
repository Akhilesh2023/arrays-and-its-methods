//FROM
// Creates a new array form an iterable or an array like object.
// it is very useful when you want to convert non array object like string into array

const array = "MANISH";
let array1 = Array.from(array);
console.log(array1);

const arr = [1, 2, 3, 4, 5, 6];
let double = Array.from(arr, (num) => num * 2);
console.log(double);
