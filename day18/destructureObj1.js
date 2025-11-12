student = {
  name: "Mihir",
  password: "mihir1212",
};

let { name, password, location = "Kamothe" } = student;

console.log(name);
console.log(password);
console.log(location);

let { name: userName, password: pw, location: address = "Kamothe" } = student;

console.log(userName);
console.log(pw);
console.log(address);
