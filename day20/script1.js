// Get Image whose id is mainImage

let imageWithId = document.getElementById("mainImage");

console.log(imageWithId);
console.dir(imageWithId);
console.log(imageWithId["src"]);

imageWithId.src =
  "https://live.staticflickr.com/7513/16053492076_14589e8be8_b.jpg";

console.log(imageWithId.src);

let heading = document.getElementsByTagName("h1");

console.log(heading);
console.log(heading[0]);
console.dir(heading[0]);
