const express = require("express");
require("dotenv").config({});
const connectDb = require("./config/db");
const apiRouter = require("./routes");

const app = express();

connectDb();

app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
