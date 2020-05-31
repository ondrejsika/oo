import React from "react";

export default (props) => (
  <>
    <h3>{props.header}</h3>
    {props.children}
  </>
);
