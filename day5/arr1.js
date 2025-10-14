// Arrays k Methods
// Array are mutable -> Changing
/*
1. push -> Add elements at the end and returns length of updated array
2. pop
3. shift
4. unshift
5. slice
6. splice
*/

let arr = [10, 20, 30, 50, 60];
console.log(arr);
arr[2] = -6;
console.log(arr);
console.log("Old Length of arr = ", arr.length);

console.log("After push length = ", arr.push(-999));
console.log("After push array = ", arr);

// If I want to add more than one element
// push

console.log("After adding 3 more element now length = ", arr.push(90, -30, 25));

console.log(arr);

console.log("Deleted element = ", arr.pop());
console.log("After pop: ", arr);

console.log("After unshift new length is: =", arr.unshift("SPRK", "TECH"));
console.log("After unshift: ", arr);
console.log("Shift Method -> ", arr.shift());
console.log("After shift: ", arr);
