// Nested Object

const info = {
  user1: {
    name: "Shoaib Shaikh",
    age: 30,
    gender: "Male",
    address: {
      addressLine1: "30/32 Demo Height, Flat No 1003",
      pincode: "410 206",
      city: "Navi Mumbai",
      state: "Maharashtra",
      country: "India",
    },
  },
  user2: {
    name: "Pranjal Sharma",
    age: 20,
    gender: "Female",
    address: {
      addressLine1: "99 Crystal Tower, Flat No 2006",
      pincode: "410 210",
      city: "Navi Mumbai",
      state: "Maharashtra",
      country: "India",
    },
  },
};

console.log(info);

console.log("Fetching only user 2");
console.log(info.user2);
console.log(info.user2.name);
console.log(info.user2.address);
console.log(info.user2.address.country);
