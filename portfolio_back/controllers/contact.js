const Contact = require("../models/contact.js");

exports.submitForm = async (req, res, next) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        message: "Un champ requis est manquant !",
      });
    }

    const newContact = new Contact({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
