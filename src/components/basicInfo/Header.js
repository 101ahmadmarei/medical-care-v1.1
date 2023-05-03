import React from "react";
import classes from "./Header.module.css";
import Content from "./Content";
import Information from "./Information";
import { Box, Container, Grid, Typography } from "@mui/material";

const Info = [
  {
    id: 1,
    title: "Prenatal care",
    describe: "the quick fox jumps over the lazy dog",
    image: "/assets/images/card-item.png",
  },
  {
    id: 2,
    title: "Prenatal care",
    describe: "the quick fox jumps over the lazy dog",
    image: "/assets/images/card-item (1).png",
  },
  {
    id: 3,
    title: "Prenatal care",
    describe: "the quick fox jumps over the lazy dog",
    image: "/assets/images/card-item (2).png",
  },
];

const Header = () => {
  return (
    <Box className={classes.root}>
      <div className={classes.overlay}></div>
      <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
        <Content />
        <Grid container spacing={2} className={classes.images}>
          {Info.map((item, i) => (
            <Information key={i} {...item} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
