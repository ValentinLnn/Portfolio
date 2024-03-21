import React from "react";
import Button from "@mui/material/Button";
import skillsData from "../../data/Skills.json";

export default function Skills() {
  return (
    <div className="skills-container">
      {skillsData[0].skills.map((skill, index) => (
        <Button key={index} variant="outlined">
          {skill}
        </Button>
      ))}
    </div>
  );
}
