import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material-next/Button";
import classes from "./Content.module.css";
const Content = () => {
  return (
    <Box className={classes.content}>
      <Typography variant="h3" sx={{}}>
        SUMMER 2020
      </Typography>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h1">Professional</Typography>
        <Typography variant="h1">Medical Care</Typography>
      </Box>

      <Typography variant="h1" sx={{ display: { md: "none" } }}>
        Quality Standards
      </Typography>
      <Typography variant="h6">
        We know how large objects will act, but things on a small scale.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "white",
          marginTop: "16px",
          fontWeight: "bold",
        }}
      >
        <span>Read More</span>
      </Button>
    </Box>
  );
};

export default Content;
