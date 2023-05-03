import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import FooterInformation from "./FooterInformation";
import LastFooter from "./LastFooter";
const Footer = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Header />
        <Divider sx={{ mb: 5, mt: 3 }} />
        <FooterInformation />
      </Container>
      <LastFooter />
    </Box>
  );
};

export default Footer;
