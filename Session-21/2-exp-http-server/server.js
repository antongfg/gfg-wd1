const express = require("express");

const app = express();

// http methods
// GET - get data
// POST - add data
// PUT - update data(totally)
// PATCH - update data(partially)
// DELETE - delete data

app.get("/", (req, res) => {
  res.send("GET ROUTE is working");
});

app.post("/", (req, res) => {
  res.send("POST ROUTE is working");
});

app.put("/", (req, res) => {
  res.send("PUT ROUTE is working");
});

app.patch("/", (req, res) => {
  res.send("PATCH ROUTE is working");
});

app.delete("/", (req, res) => {
  res.send("DELETE ROUTE is working");
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
