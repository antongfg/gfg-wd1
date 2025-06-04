const router = require("express").Router();
const albums = require("../../data/albums");

router.get("/", (req, res) => {
  res.send("Albums");
});

router.get("/all", (req, res) => {
  res.send(albums);
});

module.exports = router;
