import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { CardMedia, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./CardsProject.scss";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CardProject({ project, index }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid className="grid-card" xs={11} sm={5}>
      <Card className="card" elevation={0}>
        <CardMedia
          sx={{ height: 150 }}
          image={project.picture}
          title={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <IconButton
          className={`expandIcon ${expanded ? "rotateIcon" : ""}`}
          aria-expanded={expanded}
          aria-label="show more"
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Problèmes sur le Projet :</Typography>
            <Typography paragraph>{project.problems}</Typography>
            <Typography paragraph>Compétences développées :</Typography>
            <ul>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            {project.logo.map((logos, index) => (
              <Button key={index} className="btn-logo" size="small">
                <img src={logos} alt={`Logo ${index}`} />
              </Button>
            ))}
          </CardContent>
        </Collapse>
        <CardActions>
          <Button
            size="small"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers le github
          </Button>
          {project.demo && (
            <Button
              size="small"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
