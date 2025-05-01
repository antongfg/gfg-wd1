// var a = "10";
// var b = 20;
// if (a == 10 && b == 20) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// let, const

// var - global scoped
// let and const - block scoped

// var a = 10;
// console.log("Before the block:", a);

// if (a == 10) {
//   var a = 20;
//   //   a = 20;
//   console.log("Inside the block:", a);
// }

// console.log("After the block:", a);

// const a = 10;
// console.log("Before the block:", a);

// if (a == 10) {
//   const a = 20;
//   //   a = 20;
//   console.log("Inside the block:", a);
// }

// console.log("After the block:", a);

// const a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// 1. string
// 2. number
// 3. boolean
// 4. array
// 5. object

// const fruits = ["Mango", "Orange", "Grapes", 1, 2, true, false];

// fruits[2] = "Apple";

// fruits = ["Apple", "Kiwi"];

// console.log(fruits);

// const person = {
//   fName: "Kevin",
//   lName: "Jacob",
//   age: 23,
//   required: false,
//   sports: ["Football", "Cricket"],
//   parents: {
//     fName: "Jacobs",
//     mName: "Lenny",
//   },
// };

// const input = "sdfsdfß";

// console.log(person.parents.fName);
// console.log(person[input]);

// function hey(a, b) {
//   console.log("Hey there", a, b);
// }

// hey(1, 2);

// function expression

// var hey = function () {
//   console.log("Hey there");
// };

// hey();

// IIFE - immediately invoked function expression

// (function () {
//   console.log("hey here");
// })();

// Arrow functions

// var hey = () => {
//   console.log("Hey there");
// };

// hey();

// Hoisting
// console.log(a);
// const a = 10;

// var a;
// console.log(a);
// a = 10;

// greet();

// function greet() {
//   console.log("Hello!!!");
// }

// var greet = function () {
//   console.log("Hello!!!");
// };

// var greet;
// greet()
// greet = function () {
//     console.log("Hello!!!");
//   };

// for, while, do while
// for(initializer; condition; incrementer/decrementer){

// } i = i + 1

// for (let i = 0; i < 10; i++) {
//   console.log("i:", i);
// }

// let i = 0;

// while (i < 10) {
//   console.log("i:", i);
//   i++;
// }
// let i = 10;
// do {
//   console.log("i:", i);
// } while (i < 10);

let num = prompt("Enter a number");
console.log(num);
