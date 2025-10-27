/*

        * 
      * * 
    * * * 
  * * * * 
* * * * * 
*/

n = 5;

// ROW
for (let i = 1; i <= n; i++) {
  let str = "";
  // SPACE
  for (let sp = 1; sp <= n - i; sp++) {
    str = str + "  ";
  }

  // STAR
  for (let j = 1; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}
