function higherNew(callbackfn) {
  console.log(callbackfn);
  callbackfn(); // calling callback
}

let myFun = () => {
  console.log("Hello from myFun");
};
// let myFun = function () {
//   console.log("Hello from myFun");
// };

higherNew(myFun);
