import type { AppProps } from "next/app";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/layout";
import { HorizontalLoader, Loader } from "../components/SharedComponents/Loader";
import "../styles/stylesheet.scss";

function MyApp({ Component, pageProps }: AppProps) {
  //  <HorizontalLoader />
  // kruzni-- <Loader />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
