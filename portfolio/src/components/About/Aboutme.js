import React from "react";
import ButtonBar from "./ButtonBar";
import { Typography } from "@mui/material";
import "./Aboutme.scss";
function Aboutme() {
  return (
    <div className="aboutme-container">
      <Typography paragraph>
        Ancien électricien, reconverti récemment en tant que développeur web
        ayant toujours été berçé dans l'informatique, il me parassait évident de
        poursuivre dans cette voie.
      </Typography>
      <Typography paragraph>
        En quête d'approfondissement dans mes connaissances sur le métier, je
        m'informe sur l'actualité et les nouveautés concernant le domaine.
        Enfin, je suis à la recherche d'une alternance suite à ma formation de
        développeur web junior.
      </Typography>
      <ButtonBar />
    </div>
  );
}

export default Aboutme;
