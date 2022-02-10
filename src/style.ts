import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  body {
    ${reset}
    margin: 0;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.fontColor};
    /* border-color: ${props => props.theme.borderColor}; */
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  input {
    border: 0;
  }
    
`

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    fontColor: string;
    borderColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  fontColor: "#2c2c2c",
  bgColor:"lightgrey",
  borderColor:`rgba(0, 0, 0, 0.1)`,
};

export const darkTheme: DefaultTheme = {
  fontColor: "#F6F6F6",
  bgColor:"#333333",
  borderColor:`rgba(255, 255, 255, 0.1)`,
};