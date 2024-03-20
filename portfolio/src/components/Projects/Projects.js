import Grid from "@mui/material/Unstable_Grid2";
import CardProject from "./CardsProjects";
import ProjectData from "../../data/Project.json";

export default function Projects() {
  return (
    <Grid
      container
      className="container-projects"
      sx={{ justifyContent: "center", gap: "32px" }}
    >
      {ProjectData.map((project, index) => (
        <CardProject
          key={`${project.title}-${index}`}
          project={project}
          index={index}
        />
      ))}
    </Grid>
  );
}
