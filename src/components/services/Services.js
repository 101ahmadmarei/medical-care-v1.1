import { Container, Grid } from "@mui/material";
import React from "react";
import Title from "../../ui/Title";
import Service from "./Service";

const data = [
  {
    id: 1,
    title: "Easy Wins",
    text: "Get your best looking smile now!",
    image: "/assets/images/bx_bxs-book-reader.png",
    image: "/assets/images/bx_bxs-book-reader.png",
  },
  {
    id: 2,
    title: "Concrete",
    text: "Defalcate is most focused in helping you discover your most beautiful smile",
    image: "/assets/images/carbon_book.png",
  },
  {
    id: 3,
    title: "Hack Growth",
    text: "Overcame any hurdle or any other problem.",
    image: "/assets/images/Vector.png",
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: "160px" }}>
      <Title
        p1="Featured Products"
        title="THE BEST SERVICES"
        p2="Problems trying to resolve the conflict between "
      />
      <Grid container spacing={6} sx={{ mt: "80px" }}>
        {data.map((item, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Service {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
