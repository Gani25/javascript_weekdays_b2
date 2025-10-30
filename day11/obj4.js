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
    orders: [
      {
        order_id: 1551,
        order_name: "Tooth Brush",
        qty: 5,
        unit_price: 80,
      },
      {
        order_id: 1560,
        order_name: "Colgate",
        qty: 1,
        unit_price: 300,
      },
    ],
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
    orders: [
      {
        order_id: 2050,
        order_name: "Mobile Cover",
        qty: 2,
        unit_price: 999,
      },
      {
        order_id: 2665,
        order_name: "Hair Straightner",
        qty: 5,
        unit_price: 3500,
      },
    ],
  },
};

console.log(info);

console.log("Fetching only user 2");
console.log(info.user2);
console.log(info.user2.name);
console.log(info.user2.address);
console.log(info.user2.address.country);

orders_details = info.user2.orders;
console.log(orders_details);

for (let singleOrder of orders_details) {
  console.log("Name = ", singleOrder.order_name);
  console.log("Id = ", singleOrder.order_id);
  console.log("Per Piece Price = ", singleOrder.unit_price);
  console.log("Quantity = ", singleOrder.qty);
  console.log("Total = ", singleOrder.unit_price * singleOrder.qty);
}
