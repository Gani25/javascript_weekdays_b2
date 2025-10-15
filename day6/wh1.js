// Loops -> Again Again

/*
initialization
while(condition){
    statement;

    increment/decrement
}
*/
// WAP to print 1 to 10
// start = 1, stop = 10, gap = 1

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("Output in One Line");
i = 1;
let output = "";
while (i <= 10) {
  output = output + `${i} `;
  i++;
}

console.log(output);
