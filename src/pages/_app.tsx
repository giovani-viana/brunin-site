import type { AppProps } from "next/app";
import "./globals.css";
import "./app.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Component {...pageProps} />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
