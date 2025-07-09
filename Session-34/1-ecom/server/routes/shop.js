const router = require("express").Router();
const allowedRoles = require("../middlewares/permissions");
const verifyToken = require("../middlewares/verify");
const Shop = require("../models/Shop");

router.get("/", (req, res) => {
  res.send("Shop route is working");
});

router.post("/create", verifyToken, allowedRoles([3]), async (req, res) => {
  try {
    const shopData = await Shop.create({
      user: req.userId,
      name: req.body.name,
      address: req.body.address,
    });
    res.json({ msg: "Shop created successfully" });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
