import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import classes from "./Navbar1.module.css";
import { Box } from "@mui/material";
const Navbar1 = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <div className={classes.root}>
        <div className={classes.leftSide}>
          <div style={{ marginRight: "30px" }}>
            <LocalPhoneOutlinedIcon
              sx={{
                color: "white",
                marginRight: "5px",
                transform: "translateY(4px)",
              }}
              fontSize="small"
            />
            <span>(225) 555-0118</span>
          </div>
          <div>
            <EmailOutlinedIcon
              sx={{
                color: "white",
                marginRight: "5px",
                transform: "translateY(4px)",
              }}
              fontSize="small"
            />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className={classes.midSide}>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className={classes.rightSide}>
          <span style={{ marginRight: "16px" }}>Follow Us :</span>
          <InstagramIcon
            sx={{
              color: "white",
              marginRight: "16px",
              transform: "translateY(4px)",
            }}
            fontSize="small"
          />
          <YouTubeIcon
            sx={{
              color: "white",
              marginRight: "16px",
              transform: "translateY(4px)",
            }}
            fontSize="small"
          />
          <FacebookOutlinedIcon
            sx={{
              color: "white",
              marginRight: "16px",
              transform: "translateY(4px)",
            }}
            fontSize="small"
          />
          <TwitterIcon
            sx={{
              color: "white",
              // marginRight: "16px",
              transform: "translateY(4px)",
            }}
            fontSize="small"
          />
        </div>
      </div>
    </Box>
  );
};

export default Navbar1;
