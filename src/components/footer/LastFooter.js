import { Box, Container, Typography } from "@mui/material";
import React from "react";
import classes from "./LastFooter.module.css";

const LastFooter = () => {
  return (
    <Box className={classes.box}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box
          sx={{
            display: { sm: "flex" },
            textAlign: { xs: "center", sm: "initial" },
          }}
        >
          <Typography variant="h6">Made With Love By</Typography>
          <Typography variant="h6">Finland All Right Reserved</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LastFooter;
