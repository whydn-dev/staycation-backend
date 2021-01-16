const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Category",
  new mongose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);
