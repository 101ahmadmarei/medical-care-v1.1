import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import classes from "./Review.module.css";
const Review = ({ image, rating, name, title, description }) => {
  return (
    <Box className={classes.review}>
      <img src={image} alt="" />
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
      <Typography variant="h5">{description}</Typography>
      <Box>
        <Typography variant="h6" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Review;
