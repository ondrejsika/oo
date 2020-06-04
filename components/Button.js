import React from "react";
import Link from "next/link";

const classes = "btn btn-large btn-outline-secondary";

export default (props) => {
  if (props.href.startsWith("http") || props.href.startsWith("mailto"))
    return (
      <a target={props.target} className={classes} href={props.href} classes>
        {props.children}
      </a>
    );
  return (
    <>
      <Link href={props.href}>
        <a target={props.target} className={classes}>
          {props.children}
        </a>
      </Link>
    </>
  );
};
