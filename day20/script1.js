// Get Image whose id is mainImage
// Get Element By ID
let imageWithId = document.getElementById("mainImage");

console.log(imageWithId);
console.dir(imageWithId);
console.log(imageWithId["src"]);

imageWithId.src =
  "https://live.staticflickr.com/7513/16053492076_14589e8be8_b.jpg";

console.log(imageWithId.src);

// Get Elements By Tag Name -> Collections means array of elements -> tag may be multiple
let heading = document.getElementsByTagName("h1");

console.log(heading);
console.log(heading[0]);
console.dir(heading[0]);

// Get Elements By  Class name -> Collections means array of elements -> class may be multiple

let allImages = document.getElementsByClassName("image");

console.log(allImages);

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = `./images/batman${i + 1}.jpg`;
//   console.log(allImages[i]);
//   console.log(`Image change at position ${i}`);
// }
