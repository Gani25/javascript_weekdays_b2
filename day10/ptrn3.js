// Pyramid pattern
let n = 6;

// ROW
for (let i = 1; i <= n; i++) {
  let str = "";
  // SPACE
  for (let sp = 1; sp <= n - i; sp++) {
    str += "  ";
  }

  // STAR
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += "* ";
  }

  console.log(str);
}
