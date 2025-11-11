// Iterate over entire array and return single value/object/anything

let numbers = [5, 1, 7, 9, 3];
// addition of array

let total = numbers.reduce((initial, currentValue, index) => {
  return initial + currentValue;
}, 0);

console.log(total);
console.log(numbers);
