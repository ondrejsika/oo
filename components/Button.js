import React from "react";
import Link from "next/link";

const classes = "btn btn-large btn-outline-primary";

export default (props) => {
  if (props.href.startsWith("http") || props.href.startsWith("mailto"))
    return (
      <a className={classes} href={props.href} classes>
        {props.children}
      </a>
    );
  return (
    <>
      <Link href={props.href}>
        <a className={classes}>{props.children}</a>
      </Link>
    </>
  );
};
