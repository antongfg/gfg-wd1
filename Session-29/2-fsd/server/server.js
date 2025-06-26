const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const users = [
  {
    name: "jake",
    age: 23,
  },
  {
    name: "julie",
    age: 25,
  },
  {
    name: "Ken",
    age: 29,
  },
  {
    name: "James",
    age: 38,
  },
  {
    name: "Raji",
    age: 54,
  },
];

app.get("/", (req, res) => {
  res.json({ msg: "API is working" });
});

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(4003, () => {
  console.log("Server is up and running");
});
