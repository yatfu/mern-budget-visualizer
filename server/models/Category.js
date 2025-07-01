const mongoose = require("mongoose");


/**
 * Category: stores value of each input field in app (rent, income, etc)
 * 
 */
const categorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  amount: {
    type: Number, // STORE AMOUNT AS CENTS, NOT DOLLARS 
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Category", categorySchema);