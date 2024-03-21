import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import "./Profil.scss";

export default function Banner() {
  return (
    <div className="profil-container">
      <Typography variant="h2">Valentin Launay, Développeur Web.</Typography>
      <Avatar alt="Banner Avatar" src="" />
    </div>
  );
}
