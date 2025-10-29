// CROSS X pattern

n = 7;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j == n + 1) {
      str += "* ";
    } else {
      str += "  ";
    }
  }
  console.log(str);
}
