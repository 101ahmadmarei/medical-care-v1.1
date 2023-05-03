import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Title from "../../ui/Title";
import Review from "./Review";
const data = [
  {
    id: 1,
    name: "Regina Miles",
    title: "Designer",
    image: "/assets/images/r1.jpg",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    rating: 4,
  },
  {
    id: 2,
    name: "Regina Miles",
    title: "Designer",
    image: "/assets/images/r2.jpg",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    rating: 5,
  },
  {
    id: 3,
    name: "Regina Miles",
    title: "Designer",
    image: "/assets/images/r3.jpg",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    rating: 3.5,
  },
];

const Reviews = () => {
  return (
    <Box sx={{ mb: "160px", p: "110px 0  130px", backgroundColor: "#fafafa" }}>
      <Container>
        <Title
          title="What Clients Say"
          p2="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
        />
        <Grid container spacing={6} sx={{ mt: "80px" }}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Review {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
