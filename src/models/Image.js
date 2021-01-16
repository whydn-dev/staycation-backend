const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Image",
  new mongose.Schema({
    imageUrl: {
      type: String,
      required: true,
    },
  })
);
