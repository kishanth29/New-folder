const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAT: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
