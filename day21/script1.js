// Query Selector

// tag -> direct
const div = document.querySelector("div"); // first occurence

console.log(div);

const para = document.querySelector("#description");

console.log(para);

const newPara = document.querySelector(".content");

console.log(newPara);
console.dir(newPara);

const image = document.querySelector(".image");

console.log(image);

// all images
const allImages = document.querySelectorAll(".image");
console.log(allImages);

const li = document.querySelector("li");

console.log(li);
const lists = document.querySelectorAll("li");
console.log(lists);

const secondList = document.querySelector("[second-list]");

console.log(secondList);

const anchor = document.querySelector("a[href='www.github.com']");

console.log(anchor);
