function addition(n1, ...numbers) {
  console.log("Value of n1 = ", n1);
  console.log(numbers);

  console.log(typeof numbers);

  return numbers.reduce((prev, curr) => prev + curr, n1);
}

console.log(addition(5, 10, 20, 15, 20));
