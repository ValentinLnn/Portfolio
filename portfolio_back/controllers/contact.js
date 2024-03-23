const Contact = require("../models/contact.js");
const nodemailer = require("nodemailer");

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

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.PASSWORD_SENDER,
      },
    });

    let mailOptions = {
      from: `"Valentin Portfolio Contact" <${process.env.MAIL_SENDER}>`,
      to: process.env.MAIL_ADDRESSEE,
      subject: "Nouveau message de contact",
      text: `Vous avez reçu un nouveau message de contact:
        Prénom: ${firstName}
        Nom: ${lastName}
        Email: ${email}
        Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
