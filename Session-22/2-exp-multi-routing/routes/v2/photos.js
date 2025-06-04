const router = require("express").Router();
const photos = require("../../data/photos");

router.get("/", (req, res) => {
  res.send("photos");
});

router.get("/all", (req, res) => {
  res.send(photos);
});

module.exports = router;
