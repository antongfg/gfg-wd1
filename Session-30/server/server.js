const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user");

connectDB();

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(4003, () => {
  console.log("Server is up and running");
});
