/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/
let n = 5;
// ROW
for (let i = 1; i <= n; i++) {
  let str = "";
  // COLUMN
  for (let j = 1; j <= n; j++) {
    str = str + j + " ";
  }
  console.log(str);
}
