const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Bank",
  new mongose.Schema({
    name: {
      type: String,
      required: true,
    },
    bankNumber: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
  })
);
