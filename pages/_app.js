import "@fontsource/poppins/300.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

// import your default seo configuration
import SEO from "../next-seo.config.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
