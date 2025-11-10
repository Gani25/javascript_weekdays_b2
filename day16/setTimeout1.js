console.log(setTimeout);

const sayHello = function () {
  console.log("Hello after certain time");
};
setTimeout(sayHello, 3000);

console.log("Hello All");

setTimeout(() => {
  console.log("Hello after 2 sec");
  setTimeout(() => {
    console.log("Hello after 4 sec");
  }, 2000);
}, 2000);

console.log("Hello After timeout");
