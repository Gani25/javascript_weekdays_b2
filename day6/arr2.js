let arr1 = [5, 1, 7, 9, 3, 2, 4, 6, 8, 10];

console.log(arr1);

let newArr = arr1.slice(2, 5);

console.log("New Arr = ", newArr);

console.log("Actual Array = ", arr1);
let deletedArr = arr1.splice(2, 3);
console.log("Deleted Arr Element = ", deletedArr);

console.log("Actual Array = ", arr1);
