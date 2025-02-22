const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  car_id: String
});

module.exports = mongoose.model("Customer", CustomerSchema);