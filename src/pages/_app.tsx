import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={`${alexandria.variable} font-alexandria`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
