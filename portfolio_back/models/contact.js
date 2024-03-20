const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("contacts", ContactSchema);

module.exports = Contact;
