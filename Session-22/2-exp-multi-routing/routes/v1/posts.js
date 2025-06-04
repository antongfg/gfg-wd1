const router = require("express").Router();
const posts = require("../../data/posts");

router.get("/", (req, res) => {
  res.send("posts");
});

router.get("/all", (req, res) => {
  res.send(posts);
});

module.exports = router;
