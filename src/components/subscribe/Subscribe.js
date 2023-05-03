import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import classes from "./Subscribe.module.css";
const Subscribe = () => {
  return (
    <Box className={classes.root}>
      <Container>
        <Box
          sx={{
            flexWrap: { xs: "wrap", sm: "nowrap" },
            textAlign: { xs: "center", sm: "initial" },
          }}
          className={classes.content}
        >
          <Box className={classes.title}>
            <Typography variant="h1" sx={{ width: { xs: "100%", md: "40%" } }}>
              Subscribe For Latest Newsletter
            </Typography>
            <Typography variant="h6" sx={{ width: { xs: "100%", md: "60%" } }}>
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "white",
              color: "#2A7CC7",
              margin: "0 auto",
              padding: "10px 30px",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;
