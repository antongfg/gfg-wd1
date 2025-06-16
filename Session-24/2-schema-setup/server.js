const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const apiRouter = require("./routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
