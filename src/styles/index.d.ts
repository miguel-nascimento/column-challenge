import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      background: string;
      text: {
        black: string,
        gray: string,
        lightGray: string,
        white: string,
      }
    };
  }
}
