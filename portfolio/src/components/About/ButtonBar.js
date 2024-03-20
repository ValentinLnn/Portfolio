import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function ButtonBar() {
  return (
    <Box>
      <ButtonGroup aria-label="icon button group">
        <IconButton
          aria-label="link linkedin"
          size="small"
          href="https://www.linkedin.com/in/valentin-launay-906890192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="link github"
          size="small"
          href="https://github.com/ValentinLnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
}

export default ButtonBar;
