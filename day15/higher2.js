function sayHello(name) {
  console.log("Welcome ", name);
}

function greetings(func, arrNames) {
  for (theName of arrNames) {
    func(theName);
  }
}

names = ["Shubham Sharma", "Payal Shinde", "Memon Abdul Gani", "Parth Patil"];
greetings(sayHello, names);
