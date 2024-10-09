//MAP map methods intract over the array and perform the operation and create a new array
const arr = [1, 2, 3, 4, 5, 6];
const array1 = arr.map((num) => num + 20);
console.log(array1);

// Extracting properties from Objects
const user = [
  { name: "Akhilesh", age: 34 },
  { name: "Manish", age: 37 },
  { name: "Vijay Pal", age: 39 },
];
//Extracting the names
const names = user.map((user) => user.name);
console.log(names);
// Extracting the age
const ages = user.map((user) => user.age);
console.log(ages);

//converting data types
const strings = ["1", "2", "3", "4"];
const numbers = strings.map((str) => Number(str));
console.log(numbers, Array.isArray(numbers));
console.log(strings, Array.isArray(strings));

// Adding new properties to objects
const user1 = [
  { name: "Akhilesh", age: 34 },
  { name: "Manish", age: 37 },
  { name: "Vijay Pal", age: 39 },
];
// Adding a  new 'isAdult' property
const updatedUsers = user1.map((user) => ({
  ...user,
  isAdult: user.age >= 35,
}));
console.log(updatedUsers);

// Filtering and Mappind data
const users = [
  { name: "Akhilesh", age: 15 },
  { name: "Manish", age: 37 },
  { name: "Vijay Pal", age: 39 },
];
//Extract name of users who are adults (age>=18)
const adultName = users
  .filter((user) => user.age > 18)
  .map((user) => user.name);
console.log(adultName);
