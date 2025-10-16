// WAP to print factorial of 5
// 5 * 4 * 3 * 2 * 1
// start = 5, stop = 1, gap = -1

let fact = 1;

for (let i = 5; i >= 1; i--) {
  // fact = fact * i;
  fact *= i;
}

console.log(`The factorial of 5 is ${fact}`);
