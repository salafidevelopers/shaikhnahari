import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alexandria } from "next/font/google";
import Head from "next/head";
import { Fragment } from "react";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sheikh Yahyah An-Nahari</title>
      </Head>
      <Navbar />
      <main className={`${alexandria.variable} font-alexandria`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}
