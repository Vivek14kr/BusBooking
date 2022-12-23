const mongoose = require ('mongoose');

const seatSchema = new mongoose.Schema (
  {

    seatNumber: {type: Number, required: true},  // seat number
    status: {type: Boolean, required: true, default: false},  // seat status (available or booked)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: false,
        default: null
      },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model ('seats', seatSchema);