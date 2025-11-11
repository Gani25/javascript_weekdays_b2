// MAP: Perform Operation on each element of array and
// return new array of same size

let arr = [5, 1, 7, 9, 3];
// Square of each elements

let squareArr = arr.map((element) => {
  return element ** 2;
});

console.log(arr);
console.log(squareArr);
