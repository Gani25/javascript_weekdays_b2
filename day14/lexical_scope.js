/*
1. Lexical Scope-> 
A variable is defined outside of a function can be accessible inside 
another function called after variable declaration 
*/

function sayGreet() {
  let age = 50;
  console.log("Hello ", name);

  function sayAge() {
    let gender = "Male";
    console.log("You are ", age, " years old");
  }

  sayAge();
  //   console.log(gender); // ERROR
}

let name = "SPRK TECH";
sayGreet();
