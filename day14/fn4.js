// Function Nesting

function greet() {
  console.log("Hello");
  welcome();
}

function welcome() {
  console.log("Welcome");
}

function caller() {
  console.log("Inside Caller");
  greet();
}
caller();
