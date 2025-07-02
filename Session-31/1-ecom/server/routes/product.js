const router = require("express").Router();
const allowedRoles = require("../middlewares/permissions");
const verifyToken = require("../middlewares/verify");
const Product = require("../models/Product");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Product route is working");
});

router.post("/create", verifyToken, allowedRoles([3]), async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      images: req.body.images,
      description: req.body.desc,
      shop: req.body.shopId,
      rating: req.body.rating,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
    });

    res.json({ msg: "Product created successfully" });
  } catch (error) {
    res.json({ error });
  }
});

router.get("/all", verifyToken, async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.json({ error });
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ product });
  } catch (error) {
    res.json({ error });
  }
});

router.post("/:id/add-review", verifyToken, async (req, res) => {
  try {
    console.log(req.userId);
    const user = await User.findById(req.userId);
    const review = {
      name: user.name,
      comment: req.body.review,
    };
    await Product.findByIdAndUpdate(req.params.id, {
      $push: { reviews: review },
    });
    res.json({ msg: "Added successfully" });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
