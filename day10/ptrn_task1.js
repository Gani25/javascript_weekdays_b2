let n = 5;

// ROW
for (let i = 1; i <= n; i++) {
  let str = "";
  // SPACE
  for (let sp = 1; sp <= n - i; sp++) {
    str += "  ";
  }

  // STAR
  for (let j = 1; j <= n; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}
