const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/contact"));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connexion à la BDD OK !");
    app.listen(process.env.PORT, () => {
      console.log(`Le serveur tourne sur le port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));
