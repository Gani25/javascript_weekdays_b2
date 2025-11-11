// TRUE/FALSE -> if few condition of callbacks are true -> some will return true
// TRUE/FALSE -> if all condition of callbacks are true -> every will return true else false

let numbers = [11, 5, 3, 1, 9, 12];

console.log(
  numbers.some((element) => {
    return element % 2 == 0;
  })
);
console.log(
  numbers.every((element) => {
    return element % 2 == 0;
  })
);

numbers = [10, 20, 30, 10, 14, 12];
console.log(
  numbers.every((element) => {
    return element % 2 == 0;
  })
);
