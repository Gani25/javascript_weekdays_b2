// Filter: Return a new array where condition on existing elemnt is true

let numbers = [9, 20, -5, 6, 8, -10, 30, 15, 22];

// Filter all elements which are positive

let positive = numbers.filter((element) => {
  return element > 0;
});

console.log(numbers);
console.log(positive);

// Filter all elements which are positive and even

let posEven = numbers.filter((element) => {
  return element > 0 && element % 2 == 0;
});

console.log(posEven);
// Filter all elements which are positive and even

let posOdd = numbers.filter((element) => {
  return element > 0 && element % 2 != 0;
});

console.log(posOdd);

console.log(numbers);
