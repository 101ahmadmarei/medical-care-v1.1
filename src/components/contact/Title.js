import React from "react";
import classes from "./Title.module.css";
const Title = ({ title, text }) => {
  return (
    <div className={classes.title}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Title;
