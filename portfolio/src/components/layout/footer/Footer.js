import "./Footer.scss";
import ButtonBar from "../../About/ButtonBar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_btn-bar">
        <ButtonBar />
      </div>
      <Typography className="footer_text">
        Réalisé par Valentin Launay, 2024
      </Typography>
    </footer>
  );
};

export default Footer;
