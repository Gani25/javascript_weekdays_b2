let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 == 0) {
      str += "0 ";
    } else {
      str += "1 ";
    }
  }
  console.log(str);
}
