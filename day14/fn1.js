// Function with return type and with parameters

function checkEven(num) {
  if (num % 2 == 0) {
    return `Number ${num} is even number`;
  }
  return `Number ${num} is odd number`;
}

console.log(checkEven(11));
console.log(checkEven(20));
