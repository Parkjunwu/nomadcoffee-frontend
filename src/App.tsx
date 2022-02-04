import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import {client, darkModeVar, isLoggedInVar} from "./client";
import { darkTheme, GlobalStyle, lightTheme } from "./style";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import NotFound from "./screens/NotFound";

export default function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <HelmetProvider>
          <GlobalStyle />
          <Router>
            <div>
              <Switch>
                <Route path="/" exact>
                  {isLoggedIn?<Home />:<LogIn />}
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
