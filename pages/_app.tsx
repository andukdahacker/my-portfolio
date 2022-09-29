import type { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
        <AnimatePresence initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
