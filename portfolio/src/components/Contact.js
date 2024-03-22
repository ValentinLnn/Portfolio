import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-cd3l.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Message envoyé avec succès !");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Card
      sx={{ maxWidth: 450, margin: "0 auto", background: "transparent" }}
      elevation={0}
    >
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                label="Prénom"
                placeholder="Votre prénom"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                label="Nom"
                placeholder="Votre nom"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                label="Email"
                placeholder="Votre e-mail"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                multiline
                rows={4}
                placeholder="Votre message"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                fullWidth
              >
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
