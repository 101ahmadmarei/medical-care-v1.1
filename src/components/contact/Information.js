import React from "react";
import classes from "./Information.module.css";
import { Grid } from "@mui/material";
const Information = () => {
  return (
    <Grid container spacing={6} className={classes.list}>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <img src="/assets/images/circle.png" alt="" />
        <div>
          <p>
            Phone<span>: 987-654-3210</span>
          </p>
          <p>
            Email<span>: email@gmail.com</span>
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <img src="/assets/images/circle.png" alt="" />
        <p>Support forum for over 24h</p>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <img src="/assets/images/circle.png" alt="" />
        <p>Free standard shipping on all orders.</p>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <img src="/assets/images/circle.png" alt="" />
        <p>
          Address<span>: 8099 Trenton st.MiniapoGrids</span>
        </p>
      </Grid>
    </Grid>
  );
};

export default Information;
