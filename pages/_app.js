import React from "react";
import Head from "next/head";
import GoogleTagManager from "../gtm/GoogleTagManager";
import { init as gtm_init } from "../gtm/lib";

import "bootstrap/dist/css/bootstrap.min.css";

const GTM_ID = "UA-24094281-13";

export default ({ Component, pageProps }) => {
  gtm_init(GTM_ID);
  return (
    <>
      <Head>
        <GoogleTagManager gtm_id={GTM_ID} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
