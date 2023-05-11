import "main-app/styles/globals.css";
import Header from "../components/Header";
import Footer from "main-app/components/Footer";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("checkout/Nav"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
