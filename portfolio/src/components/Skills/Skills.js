import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import skillsData from "../../data/Skills.json";

export default function Skills() {
  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      {skillsData[0].skills.map((skill, index) => (
        <Grid key={index} xs={6} sm={4}>
          <Button variant="contained">{skill}</Button>
        </Grid>
      ))}
    </Grid>
  );
}
