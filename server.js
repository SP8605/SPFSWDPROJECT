const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/serviceRecApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API Routes
app.use("/api/customers", require("./routes/customerRoutes"));
app.use("/api/vehicles", require("./routes/vehicleRoutes"));
app.use("/api/mechanics", require("./routes/mechanicRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});