let str = "Hello World, Hello World";

console.log(str.slice(6));
console.log(str.slice(6, 10));

console.log(str.slice(str.indexOf("World")));

console.log(str);

str = "I like Java";

console.log(str);

console.log(str.replace("like", "do"));
console.log(str.replace("like", "do").replace("Java", "Js"));
console.log(str);

console.log(str.repeat(3));

console.log(str);
console.log(str[7]);
str[7] = "P"; // doesn't apply since strings are immutable
console.log(str);
console.log(str[7]);
