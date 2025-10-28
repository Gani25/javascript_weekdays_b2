// Looping over array
const names = ["Shubham", "Shoaib", "Rohit", "Pranjal"];

// Iterate over array
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Enhance for loop -> for of loop
console.log("For of Loop:");
for (let element of names) {
  console.log(element);
}

const students = [
  [1, "Atul Mehshram", [50, 60, 80, 90, 85]],
  [2, "Pranjal Gupta", [35, 45, 85, 98, 99]],
  [3, "Prajakta Ahire", [97, 95, 85, 93, 98]],
];

console.log(students);
for (let student of students) {
  //   console.log(student);
  console.log("Student Info");
  for (let info of student) {
    console.log(info);
  }
}
