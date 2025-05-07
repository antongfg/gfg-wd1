// Promise

// 1. waiting
// 2. completed / fulfiled
// 3. rejected / failure

console.log("Code started");

const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 3000);
});

test
  .then((result) => {
    console.log("resolved", result);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

console.log("Code ended");
