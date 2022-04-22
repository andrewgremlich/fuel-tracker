import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/classes.css";
import "../styles/atomic.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
