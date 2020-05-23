import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  let styles = [classes.Button, classes[props.btnType]].join(" ");
  let symbol = null;
  if (props.icon) {
    if (props.icon === "rocket") {
      symbol = <i className="fa fa-rocket"> </i>;
    }
    if (props.icon === "add") {
      symbol = <i className="fa fa-plus"> </i>;
    }
  }

  return (
    <button onClick={props.clicked} className={styles}>
      {symbol}
      &nbsp;&nbsp; {props.children}
    </button>
  );
};

export default button;
