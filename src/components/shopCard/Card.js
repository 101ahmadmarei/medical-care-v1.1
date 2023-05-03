import { Box, Typography } from "@mui/material";
import React from "react";
import classes from "./Card.module.css";
const Card = ({ image, title, quantity, id }) => {
  return (
    <Box
      className={classes.root}
      sx={{ height: { xs: "300px", md: "initial" } }}
    >
      <img src={image} alt="card-cover" />
      <div className={classes.overlay}></div>
      <Box className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{quantity}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
