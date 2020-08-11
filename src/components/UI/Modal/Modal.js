import React from "react";
import classes from "./Modal.module.css";
const modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      //vh= view port height
    >
      {props.children}
    </div>
  );
};
export default modal;
