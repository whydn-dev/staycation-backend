const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Feature",
  new mongose.Schema({
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  })
);
