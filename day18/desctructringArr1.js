// Destructring -> Converting array elements into variables

let names = [
  "Samdish",
  "Varun",
  "Rohit",
  "Pranjal",
  "Sanika",
  "Abdul",
  "Mihir",
  "Swarupa",
];

let [n1, n2, n3, n4, n5, ...remaining] = names;

console.log("Name 1 = ", n1);
console.log("Name 2 = ", n2);
console.log("Name 3 = ", n3);
console.log("Name 4 = ", n4);
console.log("Name 5 = ", n5);
console.log("Remaining = ", remaining);

console.log("Names = ", names);
