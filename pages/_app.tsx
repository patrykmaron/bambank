import { AppProps } from "next/app";
import Theme from "../styles/Theme";

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
