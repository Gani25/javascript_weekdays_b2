function higher(kuchbhi) {
  console.log("This is a Callback Value: ", kuchbhi);
  console.log("This is a type of Callback Value: ", typeof kuchbhi);

  kuchbhi(); // calling a callback function
}

// Function Call -> Pass Values it is called as arguments
// higher(10);

// function call -> passing another func as argument
higher(function () {
  console.log("Hello from anonymous function");
});

let fn = function () {
  console.log("Hello");
};

let newFn = () => {
  console.log("Hello from arrow");
};

// when we have callback/Higher Ordrr Function function
// calling that function we pass argument in the form of
// anonymous function(function expression) or lambda/Arrow function
