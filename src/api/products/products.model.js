const mongoose = require("mongoose");

module.exports = mongoose.model(
  "product",
  new mongoose.Schema(
    {
      name: String,
      price: Number,
      image: String,
      description: String,
    },
    {
      timestamps: true,
    }
  )
);
