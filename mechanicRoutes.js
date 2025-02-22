const express = require("express");
const router = express.Router();
const Mechanic = require("../models/Mechanic");

router.post("/", async (req, res) => {
  try {
    const newMechanic = new Mechanic(req.body);
    await newMechanic.save();
    res.status(201).json(newMechanic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const mechanics = await Mechanic.find();
    res.json(mechanics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;