const students = [
  {
    name: "Jayesh",
    marks: [50, 60, 80, 90, 85],
    gender: "Male",
  },
  {
    name: "Pranjali",
    marks: [35, 40, 25, 60, 75],
    gender: "Female",
  },
  {
    name: "Mahe",
    marks: [95, 80, 95, 90, 75],
    gender: "Female",
  },
];

students.forEach(function (student) {
  console.log(student);

  console.log("Total Marks of Students = ", addMarks(student["marks"]));
});

function addMarks(marksArr) {
  let total = 0;
  marksArr.forEach((mark) => {
    total = total + mark;
  });
  return total;
}
