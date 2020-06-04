import React from "react";
import Link from "next/link";

export default (props) => (
  <>
    <Link href={props.href}>
      <a className="btn btn-large btn-outline-primary">{props.children}</a>
    </Link>
  </>
);
