const calculator = {
  company: "Casio",
  add(a, b) {
    return a + b;
  },
  subt(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

console.log(calculator.company);
console.log(calculator.add(6, 10));
