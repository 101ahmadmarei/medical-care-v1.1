import React from "react";
import classes from "./ButtonEmail.module.css";
const ButtonEmail = () => {
  return (
    <div className={classes.button}>
      <div>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <p>Lore imp sum dolor Amit</p>
    </div>
  );
};

export default ButtonEmail;
