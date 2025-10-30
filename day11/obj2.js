// Add, Update, remove properties from object

const student = {
  rollNo: 10,
  name: "Demo 1",
  gender: "Male",
};

console.log("Object after creation: ", student);

// Add
// student.percentage = 85.55;
student["percentage"] = 99.98;
console.log("Student Object after adding percentage field: ", student);

student.gender = "Female";
console.log("Student Object after modifying gender: ", student);

delete student.gender;
console.log("Student Object after deleting gender: ", student);
