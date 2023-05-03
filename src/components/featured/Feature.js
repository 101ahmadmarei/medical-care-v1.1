import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./Feature.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Feature = ({ google, trending, news, desc, image }) => {
  const [active, setActive] = useState(0);

  const changeCardContent = (id) => {
    setActive(id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300, position: "relative" }}
        image={image}
        title="green iguana"
      >
        <Box className={classes.new}>New</Box>
      </CardMedia>
      <CardContent>
        <ButtonGroup variant="text" aria-label="outlined primary button group">
          <Button
            onClick={changeCardContent.bind(null, 0)}
            sx={{
              color: active === 0 ? "#8EC2F2" : "#737373",
              fontSize: "12px",
              fontFamily: "Montserrat",
            }}
          >
            Google
          </Button>
          <Button
            onClick={changeCardContent.bind(null, 1)}
            sx={{
              color: active === 1 ? "#8EC2F2" : "#737373",
              fontSize: "12px",
              fontFamily: "Montserrat",
            }}
          >
            Trending
          </Button>
          <Button
            onClick={changeCardContent.bind(null, 2)}
            sx={{
              color: active === 2 ? "#8EC2F2" : "#737373",
              fontSize: "12px",
              fontFamily: "Montserrat",
            }}
          >
            New
          </Button>
        </ButtonGroup>
        <Box className={classes.title}>
          <Typography variant="h4">
            {active === 0 ? google : active === 1 ? trending : news}
          </Typography>
          <Typography variant="h6">{desc}</Typography>
        </Box>
        <Box className={classes.icons}>
          <Box className={classes.icon}>
            <img
              src="/assets/images/coolicon.png"
              alt="clock"
              style={{ width: "13px", height: "13px" }}
            />
            <Typography variant="body2" color="text.secondary">
              22 April 2021
            </Typography>
          </Box>
          <Box className={classes.icon}>
            <img src="/assets/images/Vector (1).png" alt="clock" />
            <Typography variant="body2" color="text.secondary">
              10 comments
            </Typography>
          </Box>
        </Box>
        <CardActions>
          <Button size="small" sx={{ color: "black" }}>
            Learn More{" "}
            <ArrowForwardIosIcon
              fontSize="small"
              color="primary"
              sx={{ transform: "translate(5%,-10%)" }}
            />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Feature;
