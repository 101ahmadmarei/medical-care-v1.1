import { Box, Typography } from "@mui/material";
import React from "react";
import classes from "./Title.module.css";
const Title = ({ p1, title, p2 }) => {
  return (
    <Box className={classes.title}>
      <Typography variant="h4">{p1}</Typography>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h5">{p2}</Typography>
    </Box>
  );
};

export default Title;
