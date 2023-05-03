import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <Box className={classes.header}>
      <Typography variant="h2">MEDSONO</Typography>
      <Box>
        <FacebookOutlinedIcon sx={{ color: "#23A6F0", mr: "22px" }} />
        <InstagramIcon sx={{ color: "#23A6F0", mr: "22px" }} />
        <TwitterIcon sx={{ color: "#23A6F0", mr: "22px" }} />
      </Box>
    </Box>
  );
};

export default Header;
