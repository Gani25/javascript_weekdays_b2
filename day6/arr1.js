let arr1 = [20, 30, 40, -5, 50, 60, 90, 100, 5, 30, 50];

console.log(arr1);
// Only to delete -> start index, and delete count
console.log("Deleted elements are: ", arr1.splice(2, 3));

console.log(arr1);

// Only to delete -> start index, and delete count
console.log("Deleted elements are: ", arr1.splice(2, 3));

console.log(arr1);

// Only Insert at specified position -> start index, and delete count 0, new element
console.log(arr1.splice(3, 0, "SPRK", "Hello", 3.14, 5.55));

console.log("After adding elements at position 3");
console.log(arr1);

// Here
// Delet and insert combine
// start index, delete count, new elements to be added at same position
// start index

arr1.splice(5, 3, "Mihir", "Jadhav", 24, "Soon");
console.log(arr1);
