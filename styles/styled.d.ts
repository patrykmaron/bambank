// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      link: string;
      shadow: string;
      light: string;
      glow: string;
    };
  }
}
