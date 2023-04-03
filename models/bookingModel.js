const mongoose = require("mongoose");

//Create Userschema
const bookingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    hotel_id: {
      type: Number,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },

    hotel_name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bookings", bookingSchema);
