import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ShopCard from "./Card";
const data = [
  {
    id: 1,
    title: "Orthopedics",
    quantity: "5 Items",
    image: "/assets/images/card-cover-5.jpg",
  },
  {
    id: 2,
    title: "Prenatal care",
    quantity: "5 Items",
    image: "/assets/images/card-cover-6.jpg",
  },
  {
    id: 3,
    title: "Outpatient care",
    quantity: "5 Items",
    image: "/assets/images/card-cover-7.jpg",
  },

  {
    id: 4,
    title: "Neurosurgery",
    quantity: "5 Items",
    image: "/assets/images/card-cover-8.jpg",
  },
  {
    id: 5,
    title: "Cancer center",
    quantity: "5 Items",
    image: "/assets/images/card-cover-9.jpg",
  },
];

const ShopCards = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: "160px", mb: "160px" }}>
      <Grid container spacing={{ xs: 0, sm: 3 }}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={item.id === 4 ? 8 : 4} key={item.id}>
            <ShopCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopCards;
