const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: String, require: true },
    inStock: { type: Boolean, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
