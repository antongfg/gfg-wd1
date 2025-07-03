const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  images: [],
  description: {
    type: String,
  },
  reviews: [
    new mongoose.Schema({
      name: String,
      comment: String,
    }),
  ],
  shop: {
    type: mongoose.Types.ObjectId,
    ref: "shops",
  },
  rating: Number,
  price: Number,
  quantity: Number,
  category: {
    type: Number, //1. electronics, 2. Furniture 3. Lighting
  },
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
