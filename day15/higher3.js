const sayHello = function (name) {
  console.log("Welcome ", name);
};

function greetings(func, arrNames) {
  for (theName of arrNames) {
    func(theName);
  }
}

names = ["Shubham Sharma", "Payal Shinde", "Memon Abdul Gani", "Parth Patil"];
greetings(sayHello, names);

console.log("------------------------------------------------");
greetings(function (name) {
  console.log(`Hello ${name}, Greetings`);

  console.log("Welcome to Sprk Technologies");
  console.log();
}, names);
