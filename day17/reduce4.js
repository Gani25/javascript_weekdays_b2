// Iterate over entire array and return single value/object/anything

let numbers = [5, 1, 7, 9, 3, 50];
// Find minimum elemnt in array

// let min = numbers.reduce((initial, currentValue) => {
//   if (initial > currentValue) {
//     return currentValue;
//   } else {
//     return initial;
//   }
// }, 0);

// let min = numbers.reduce((initial, currentValue) => {
//   console.log(initial);
//   if (initial > currentValue) {
//     return currentValue;
//   } else {
//     return initial;
//   }
// }, Infinity);

let min = numbers.reduce((initial, currentValue) => {
  console.log(initial);
  if (initial > currentValue) {
    return currentValue;
  } else {
    return initial;
  }
});

console.log(min);
console.log(numbers);
