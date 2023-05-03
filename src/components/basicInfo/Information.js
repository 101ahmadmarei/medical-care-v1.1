import { Box, Grid } from "@mui/material";
import React from "react";
const Information = ({ title, describe, image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <img
          src={image}
          alt="card-item"
          style={{
            width: "100%",
            height: "200px",
          }}
        />
      </Box>
    </Grid>
  );
};

export default Information;
