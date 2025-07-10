const router = require("express").Router();
const userRouter = require("./user");
const shopRouter = require("./shop");
const productRouter = require("./product");
const orderRouter = require("./order");

router.use("/user", userRouter);
router.use("/shop", shopRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);

module.exports = router;
