import { Box, Typography } from "@mui/material";
import React from "react";
import classes from "./Service.module.css";
const Service = ({ image, title, text }) => {
  return (
    <Box className={classes.service}>
      <div>
        <img src={image} alt="service" />
      </div>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
};

export default Service;
