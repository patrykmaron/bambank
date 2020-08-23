import { AppProps } from "next/app";
import Theme from "../styles/Theme";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;900&display=auto");
      `}</style>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
