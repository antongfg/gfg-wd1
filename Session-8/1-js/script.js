// Copy by value
// Copy by reference

// let a = 1;
// console.log("a:", a);
// let b = a;
// console.log("b:", b);
// a = 10;
// console.log("a:", a);
// console.log("b:", b);

const user = {
  name: "Jacob",
  age: 23,
  email: "jacob@gmail.com",
};

console.log("user", user);

const newUser = { ...user };

console.log("newUser", newUser);

user.age = 54;
newUser.name = "kevin";

console.log("user", user);

console.log("newUser", newUser);

// Spread operator - ...
