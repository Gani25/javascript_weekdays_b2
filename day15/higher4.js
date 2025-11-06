// Function which return another functions

function checkEvenOrOdd(status) {
  if (status == "even") {
    return function (num) {
      console.log(num % 2 == 0);
    };
  } else if (status == "odd") {
    return function (num) {
      console.log(num % 2 != 0);
    };
  } else {
    return function (num) {
      console.log("Invalid status");
    };
  }
}
