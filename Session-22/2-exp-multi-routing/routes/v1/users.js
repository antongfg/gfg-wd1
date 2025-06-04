const router = require("express").Router();
const users = require("../../data/users");

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/all", (req, res) => {
  res.send(users);
});

module.exports = router;
