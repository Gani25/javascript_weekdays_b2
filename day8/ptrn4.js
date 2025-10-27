/*
n = 5

*
* *
* * *
* * * *
* * * * *

*/

let n = 5;
// ROW
for (let i = 1; i <= n; i++) {
  let str = "";
  // COLUMN
  for (let j = 1; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}
