import { Box, Container, Typography } from "@mui/material";
import React from "react";
import classes from "./ProductCards.module.css";
import ShowingCards from "./ShowingCards";
const ProductCards = ({ products }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <Box className={classes.header}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Featured Products
        </Typography>
        <Typography variant="h3" sx={{ mb: 5 }}>
          BESTSELLER PRODUCTS
        </Typography>
        {products.length === 0 && (
          <Typography
            variant="h5"
            sx={{
              mb: 10,
              textAlign: "center",
              fontSize: "50px",
              color: "#ccc",
              border: "1px solid #ccc",
              padding: "20px",
            }}
          >
            No Products Found
          </Typography>
        )}
        {products.length > 0 && <ShowingCards products={products} />}
      </Box>
    </Container>
  );
};

export default ProductCards;
