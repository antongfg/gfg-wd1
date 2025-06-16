const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const User = mongoose.model("users", {
  name: String,
  age: Number,
  email: String,
});

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/add", async (req, res) => {
  const user = new User(req.body);
  const data = await user.save();
  res.json(data);
});

app.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.get("/filter/:email", async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  res.json(user);
});

app.put("/update/:id", async (req, res) => {
  const newData = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(newData);
});

app.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "Data deleted" });
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
