import Navbar from "./layout/Navbar/Navbar";
import Profil from "./About/Profil";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";
import Footer from "./layout/footer/Footer";
import { Typography } from "@mui/material";
import "./main.scss";
import Aboutme from "./About/Aboutme";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="core">
        <Profil />
        <div className="section-spacing">
          <section id="Introduction">
            <Typography variant="h3">À propos de moi </Typography>
            <Aboutme />
          </section>
          <section id="Skills">
            <Typography variant="h3">Mes compétences</Typography>
            <Skills />
          </section>
          <section id="Projects">
            <Typography variant="h3">Mes projets</Typography>
            <Projects />
          </section>
          <section id="Contact">
            <Typography variant="h3">Me contacter</Typography>
            <Contact />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
