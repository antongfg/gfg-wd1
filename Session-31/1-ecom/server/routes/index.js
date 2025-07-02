const router = require("express").Router();
const userRouter = require("./user");
const shopRouter = require("./shop");
const productRouter = require("./product");

router.use("/user", userRouter);
router.use("/shop", shopRouter);
router.use("/product", productRouter);

module.exports = router;
