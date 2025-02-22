const mongoose = require("mongoose");

const MechanicSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  assigned_vehicle: String
});

module.exports = mongoose.model("Mechanic", MechanicSchema);