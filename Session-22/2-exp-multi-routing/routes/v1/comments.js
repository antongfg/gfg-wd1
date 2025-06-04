const router = require("express").Router();
const comments = require("../../data/comments");

router.get("/", (req, res) => {
  res.send("comments");
});

router.get("/all", (req, res) => {
  res.send(comments);
});

module.exports = router;
