// TASK
/*
1. Array ->
["Java","BEST","Is","Language"]
Change to below solution
["BEST","Language","Is","Java"]
*/

let arr = ["Java", "BEST", "Is", "Language"];
console.log("Array = ", arr);
arr.shift();

arr.pop();
arr.pop();

arr.push("Language", "Is", "Java");
console.log("Modified Array = ", arr);
