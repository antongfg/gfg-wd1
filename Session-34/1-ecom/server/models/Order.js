const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "products",
      },
    ],
    status: {
      type: Number, //1.waiting, 2. accepted 3. deliverd
      default: 1,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
