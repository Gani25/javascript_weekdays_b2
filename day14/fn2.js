// WAF to check whether the number is divisible by 3 and 5 both or not

function checkNumber(n) {
  // ternary operator
  // ?:

  return n % 3 == 0 && n % 5 == 0
    ? `Number = ${n} is divisible by 3 and 5 both`
    : `Number = ${n} is not divisible by 3 and 5 both`;
  /*if (n % 3 == 0 && n % 5 == 0) {
    return `Number = ${n} is divisible by 3 and 5 both`;
  } else {
    return `Number = ${n} is not divisible by 3 and 5 both`;
  }*/
}

console.log(checkNumber(30));
console.log(checkNumber(27));
