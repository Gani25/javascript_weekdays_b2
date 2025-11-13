/*1. Square and sum the array elements using the arrow function and then find the
average of the array.
*/

let arr = [2, 3, 4, 5, 6];
// 4 9 16 25 36 = add -> avg

let sum = arr
  .map((element) => element * element)
  .reduce((prev, current) => prev + current, 0);

console.log("Sum = ", sum);
console.log("Average = ", sum / arr.length);
/*
2. Create a new array using the map function whose each element is equal to the
original element plus 5.
Example 
Orginal [5,6,7,9,3]
NewArr [10, 11, 12 , 14, 8]
*/

/*
3. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.
*/

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let student = {
  firstName: "Abdul",
  gender: "Male",
};

let studentDetail = {
  lastName: "Gani",
  age: 25,
};

let studentInfo = mergeObjects(student, studentDetail);

console.log(studentInfo);
