const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  model: String,
  license_plate: String,
  status: String
});

module.exports = mongoose.model("Vehicle", VehicleSchema);

