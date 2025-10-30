/*
Types of keys we can store in objects
*/

const demoObj = {
  rollNo: 100,
  1: "Demo",
  true: "False",
  10: true,
  null: "Hello",
  undefined: "Bye",
};

console.log(demoObj);

console.log(demoObj["1"]);

console.log(demoObj.null);
console.log(demoObj["null"]);

console.log(demoObj.undefined);
console.log(demoObj.true);
