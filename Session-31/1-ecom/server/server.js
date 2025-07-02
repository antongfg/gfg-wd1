const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const apiRouter = require("./routes");

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(4003, () => {
  console.log("Server is up and running");
});
