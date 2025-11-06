function sayHello(name) {
  console.log("Welcome ", name);
}

function greetings(func, n) {
  for (let i = 1; i <= n; i++) {
    // call
    func(`Demo ${i}`);
  }
}

greetings(sayHello, 5);
