// Any block of code I want to execute again and again after certain
// period of time then use setInterval

const id = setInterval(() => {
  console.log("Hello Hello");
}, 2000);

console.log(id);

setTimeout(() => {
  clearInterval(id);
  console.log("Closing The Interval");
}, 11000);
