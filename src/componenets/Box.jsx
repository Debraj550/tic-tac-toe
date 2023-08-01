import React from "react";
import "./Box.css";

const Box = (props) => {
  const style = props.value === "X" ? "box x" : "box o";
  return (
    <div>
      <button className={style}>{props.value}</button>
    </div>
  );
};

export default Box;
