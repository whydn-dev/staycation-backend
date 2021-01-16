const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Activity",
  new mongose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isPopular: {
      type: Boolean,
    },
  })
);
