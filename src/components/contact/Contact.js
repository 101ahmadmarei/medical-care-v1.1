import { Container, Grid } from "@mui/material";
import React from "react";
import ContactInfo from "./ContactInfo";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: "50px" }}>
      <Grid container spacing={6}>
        <Grid xs={12} md={6} item className="imgSide">
          <img
            src="/assets/images/Rectangle.png"
            alt=""
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} className="textSide">
          <ContactInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
