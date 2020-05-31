import React from "react";

export default (props) => (
  <>
    <h2>{props.header}</h2>
    {props.children}
  </>
);
