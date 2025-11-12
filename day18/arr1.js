// Arrays is a collection of multiple values

let numbers = [5, 1, 7, 9, 3];

let newNum = numbers;

console.log("Numbers = ", numbers);
console.log("New Numbers = ", newNum);

newNum.push(50);
console.log("Numbers = ", numbers);
console.log("New Numbers = ", newNum);

let newNumCopy = [...numbers];

newNumCopy.push(-66);
console.log("Numbers = ", numbers);
console.log("New Numbers = ", newNum);
console.log("New Numbers Copy = ", newNumCopy);

console.log(...newNumCopy);
console.log(..."ABDUL");

console.log({ ...newNumCopy });
