import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ShowingCards = ({ products }) => {
  return (
    <Box>
      <Grid container spacing={4} display={{ xs: "none", sm: "flex" }}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
        >
          {products.map((item) => (
            <ProductCard {...item} key={item.id} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ShowingCards;
