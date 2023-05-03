import { Container, Grid } from "@mui/material";
import React from "react";
import Title from "../../ui/Title";
import Feature from "./Feature";
const posts = [
  {
    id: 1,
    google: "improving the lives of millions. ",
    trending: "help us shape the future of health care",
    news: "brave new world of genome sequencing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/assets/images/f1.png",
  },
  {
    id: 1,
    google: "improving the lives of millions. ",
    trending: "help us shape the future of health care",
    news: "brave new world of genome sequencing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/assets/images/f2.png",
  },
  {
    id: 1,
    google: "improving the lives of millions. ",
    trending: "help us shape the future of health care",
    news: "brave new world of genome sequencing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/assets/images/f1.png",
  },
];

const Featured = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: "160px" }}>
      <Title title="Featured Posts" />
      <Grid container spacing={1} sx={{ mt: "80px" }}>
        {posts.map((item, i) => (
          <Grid key={i} item sx={{ margin: "auto" }}>
            <Feature {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Featured;
