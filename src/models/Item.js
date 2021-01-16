const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

module.exports = mongoose.model(
  "Item",
  new mongose.Schema({
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      defaul: "Indonesia",
    },
    city: {
      type: String,
      required: true,
    },
    isPopular: {
      type: Boolean,
    },
    description: {
      type: Boolean,
    },
    imageId: [
      {
        type: ObjectId,
        ref: "Image",
      },
    ],
    featureId: [
      {
        type: ObjectId,
        ref: "Feature",
      },
    ],
    activityId: [
      {
        type: ObjectId,
        ref: "Activity",
      },
    ],
  })
);
