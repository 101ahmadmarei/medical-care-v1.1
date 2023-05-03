import { Box, Typography } from "@mui/material";
import React from "react";

const Item = ({ image, title, price }) => {
  return (
    <Box sx={{ display: "flex", marginBottom: "10px" }}>
      <img src={image} alt={title} style={{ width: "60px", height: "60px" }} />
      <Box width="100%">
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between " }}>
          <Typography
            sx={{
              color: "rgb(11 90 234 / 97%)",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            ${price}
          </Typography>
          <Typography sx={{ color: "#737373", fontSize: "14px" }}>
            Quantity:
            <span style={{ borderBottom: "solid #737373 0.5px" }}>01</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
