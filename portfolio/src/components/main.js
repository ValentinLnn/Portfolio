import Navbar from "./layout/Navbar/Navbar";
import Profil from "./About/Profil";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";
import Footer from "./layout/footer/Footer";
import Typography from "@mui/material/Typography";
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
            <Typography variant="h2">À propos de moi </Typography>
            <Aboutme />
          </section>
          <section id="Skills">
            <Typography variant="h2">Mes compétences</Typography>
            <Skills />
          </section>
          <section id="Projects">
            <Typography variant="h2">Mes projets</Typography>
            <Projects />
          </section>
          <section id="Contact">
            <Typography variant="h2">Me contacter</Typography>
            <Contact />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
