// Iterate over entire array and return single value/object/anything

let numbers = [5, 1, 7, 9, 3];
// addition of array

// Initial if not passed it will take value of 0th index and iteration will
// start from 1st index
let total = numbers.reduce((initial, currentValue, index) => {
  console.log("Initial = ", initial);
  console.log("Current = ", currentValue);
  console.log("Current Index= ", index);
  return initial + currentValue;
}, 0);

console.log(total);
