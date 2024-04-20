import Navbar from "@/components/navbar";
import useDynamicHeight from "@/hooks/useDynamicHeight";
import "@/styles/globals.css";
import { alexandria } from "@/utils";
import type { AppProps } from "next/app";

import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { minHeight, heroRef } = useDynamicHeight();
  console.log({ minHeight });

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sheikh Yahyah An-Nahari</title>
      </Head>
      <Navbar />
      <main
        className={`${alexandria.className} ${alexandria.variable} }`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}
