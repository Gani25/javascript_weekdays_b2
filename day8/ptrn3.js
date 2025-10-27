/*
1 2 3 
4 5 6
7 8 9
*/
let n = 3;
let count = 1;
// ROW
for (let i = 1; i <= n; i++) {
  let str = "";
  // COLUMN
  for (let j = 1; j <= n; j++) {
    str = str + count + " ";
    count++;
  }
  console.log(str);
}
