/*
this->
1. this keyword refers to an object that is executing current piece of code
2. To access any props of object for that we will use this keyword
*/

const studentInfo = {
  name: "Abdul",
  age: 25,
  gender: "Male",
  english: 35,
  science: 85,
  drawing: 95,
  hindi: 40,

  calculateAvg() {
    sum = this.english + this.science + this.drawing + this.hindi;
    console.log("Average Marks = ", sum / 4);
  },
  displayInfo() {
    console.log("-----------------------------------------");
    console.log("Student Information");
    console.log("Name =", this.name);
    console.log("Age =", this.age);
    console.log("Gender =", this.gender);
    this.calculateAvg();
    console.log("-----------------------------------------");
  },
};

studentInfo.displayInfo();
