// Copy array
let arr = [5, 1, 7, 9, 3];

console.log(arr);
// let newArr = arr.slice(0);
let newArr = arr.slice();

console.log("New Array = ", newArr);

newArr.push("SPRK", "TECH");

console.log("After Push in New Array = ", newArr);

console.log("Old Array = ", arr);
