// WAP to print table of 5 till 10 iterations
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
    .
    .
5 * 10 = 50
*/
let n = 11; // table to be displayed
let x = 5; // iteration

let i = 1;
let table; // undefined
while (i <= x) {
  table = n * i;
  console.log(`${n} * ${i} = ${table}`);
  i++;
}

// 1. WAP to print sum of 1 to 10
// 2. WAP to print square of 1 to 5
/*
//Example:
The square of 1 = 1
The square of 2 = 4
The square of 3 = 9
The square of 4 = 16
The square of 5 = 25
*/
/*
3. WAP to print FIZZBUZZ Based on criteria from 1 to 30
a. if number is divisible by 3 and 5 both -> FIZZBUZZ
b. if number is divisible by only 3  -> FIZZ
c. if number is divisible by only 5  -> BUZZ
d. if number is not divisible by 3 and 5 both -> num
*/
