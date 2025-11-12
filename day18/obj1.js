let student = {
  name: "Rohit Sharma",
  age: 30,
};

console.log(student);

let studentCopy = student;
studentCopy["gender"] = "Male";

console.log("Copy = ", studentCopy);
console.log("Original = ", student);

let newStudent = { ...student };

newStudent["country"] = "India";

newStudent["name"] = "Pranjali";
newStudent["gender"] = "Female";

console.log("New Student = ", newStudent);
console.log("Old Student = ", student);
