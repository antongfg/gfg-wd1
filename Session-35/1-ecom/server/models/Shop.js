const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model("shops", ShopSchema);

module.exports = Shop;
