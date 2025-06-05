const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send(`From env, ${process.env.SECRET_KEY}`);
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
