import { Grid } from "@mui/material";
import React from "react";
import classes from "./FooterInformation.module.css";
import ButtonEmail from "./ButtonEmail";
const data = [
  {
    title: "Company Info",
    links: ["About Us", "Careers", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Careers", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
  {
    title: "Get In Touch",
  },
];

const FooterInformation = () => {
  return (
    <Grid container spacing={1} className={classes.footer}>
      {data.map((item, index) => {
        return (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <h4>{item.title}</h4>
            {!!item.links ? (
              item.links.map((link, index) => {
                return <p key={index}>{link}</p>;
              })
            ) : (
              <ButtonEmail />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FooterInformation;
