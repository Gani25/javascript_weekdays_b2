// Nested If else
// if(){if else}

/* WAP to check whether the triangle is 
Input = 3, conditions = 3
1. Equilateral
2. Isoceles -> Any 2 sides are same
3. Scalene  
*/

let s1 = 30;
let s2 = 30;
let s3 = 30;
if (s1 > 0 && s2 > 0 && s3 > 0) {
  if (s1 == s2 && s2 == s3) {
    console.log("Equilateral Triangle");
  } else if (s1 == s2 || s2 == s3 || s1 == s3) {
    console.log("Isoceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
} else {
  console.log("Invalid Triangle");
}
