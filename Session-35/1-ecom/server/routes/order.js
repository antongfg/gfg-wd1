const verifyToken = require("../middlewares/verify");
const Order = require("../models/Order");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Order router is working");
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const data = await Order.create({
      user: req.userId,
      products: req.body.products,
      total: req.body.total,
    });
    res.json({ msg: "Order placed successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/all", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).populate("products");
    res.json({ msg: "Orders fetched successfully", orders });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
