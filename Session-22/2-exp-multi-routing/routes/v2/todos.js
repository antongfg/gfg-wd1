const router = require("express").Router();
const todos = require("../../data/todos");

router.get("/", (req, res) => {
  res.send("todos");
});

router.get("/all", (req, res) => {
  res.send(todos);
});

module.exports = router;
