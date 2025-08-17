const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

//Contact Form Route
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.json({ message: "Form Submitted" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send" });
  }
});

module.exports = router;
