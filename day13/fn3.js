// with return type with parameter

function division(numerator, denominator) {
  if (denominator == 0) {
    return "Cannot Divide By Zero";
  }
  let result = numerator / denominator;

  return `Division of ${numerator} / ${denominator} =  ${result}`;
  console.log("Hello");

  // statements -> Unreachable
}
let answer = division(50, 2);

console.log(answer);
console.log(division(60, 0));
