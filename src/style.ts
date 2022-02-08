import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  body {
    ${reset}
    /* margin: 0; */
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.fontColor};
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    fontColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  fontColor: "#2c2c2c",
  bgColor:"lightgrey"
};

export const darkTheme: DefaultTheme = {
  fontColor: "#F6F6F6",
  bgColor:"#333333"
};