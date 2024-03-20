import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./Navbar.scss";

export default function Navbar() {
  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    const yOffset = -64;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <AppBar position="sticky" elevation={0} className="navbar">
      <Toolbar className="navbar_toolbar">
        <Avatar alt="Valentin L" src="" />
        <Button
          onClick={() => handleNavigation("Introduction")}
          color="inherit"
        >
          À propos
        </Button>
        <Button onClick={() => handleNavigation("Skills")} color="inherit">
          Skills
        </Button>
        <Button onClick={() => handleNavigation("Projects")} color="inherit">
          Projets
        </Button>
        <Button onClick={() => handleNavigation("Contact")} color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
