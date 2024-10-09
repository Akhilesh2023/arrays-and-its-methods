// splice  adds or remove or replace element from an array depending on how its used.

// remove items
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = ["Apple", "Banana", "Cherry", "papaya"];
const array = arr.splice(4, 2);
console.log(arr);

//add elements
arr1.splice(1, 0, "watermelon", "lichi");
console.log(arr1);

// replace elements
arr1.splice(1, 2, "orange", "grapes");
console.log(arr1);
