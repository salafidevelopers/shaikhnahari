import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { RouteNamesProvider } from "@/contexts/RouteNamesContext";
import useDynamicHeight from "@/hooks/useDynamicHeight";
import "@/styles/globals.css";
import { alexandria } from "@/utils";
import type { AppProps } from "next/app";

import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { minHeight, heroRef } = useDynamicHeight();
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale == "ar" ? "ar" : "en";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

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
        <RouteNamesProvider>
          <Component {...pageProps} />
        </RouteNamesProvider>
      </main>
      <Footer />
    </Fragment>
  );
}
