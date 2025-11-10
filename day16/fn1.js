// Sum-> 2 numebr parameter -> return sum
function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(5, 10));

// Convert above function into lambda function/arrow function

const addition = (a, b) => {
  return a + b;
};

console.log(addition(50, 15));

// implicit return
const subtraction = (a, b) => a - b;

console.log(subtraction(50, 15));
const power = (a, b) => console.log(`${a} raise to ${b} = ${a ** b}`);

power(3, 2);
console.log(power(3, 2));
