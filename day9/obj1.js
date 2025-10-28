const students = {
  rollNo: 101,
  firstName: "Abdul",
  lastName: "Gani",
  gender: "Male",
  "student address": "Navi Mumbai",
};

console.log(students);

console.log("Access property with . notation");
console.log(students.firstName);
// Object -> elements -> Access
/*
1. Dot Notation
2. Bracket Notation
*/

console.log("Access gender with bracket notation = ", students["gender"]);
console.log("Access Gender with bracket notation = ", students["Gender"]);

let userAction = "firstName";

console.log(`You want ${userAction}, value = ${students.userAction}`);
console.log(`You want ${userAction}, value = ${students[userAction]}`);

console.log("Address of student = ", students["student address"]);
