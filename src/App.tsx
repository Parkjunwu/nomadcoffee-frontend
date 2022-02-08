import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from "react-router-dom";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import {client, darkModeVar, isLoggedInVar} from "./client";
import { darkTheme, GlobalStyle, lightTheme } from "./style";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./logInComponents/screens/Home";
import Welcome from "./notLogInComponents/screens/Welcome";
import NotFound from "./notLogInComponents/screens/NotFound";
import CreateAccount from "./notLogInComponents/screens/CreateAccount";
import LogIn from "./notLogInComponents/screens/LogIn";
import FindUsernameOrPassword from "./notLogInComponents/screens/FindUsernameOrPassword";
import { urlLink } from "./urlLink";

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
                <Route path={urlLink.HOME} exact>
                  {isLoggedIn?<Home />:<Welcome />}
                </Route>
                <Route path={urlLink.CREATE_USER} exact>
                  {isLoggedIn?<Redirect to={urlLink.HOME} />:<CreateAccount />}
                </Route>
                <Route path={urlLink.LOGIN} exact>
                  {isLoggedIn?<Redirect to={urlLink.HOME} />:<LogIn />}
                </Route>
                <Route path={urlLink.FIND_USER} exact>
                  {isLoggedIn?<Redirect to={urlLink.HOME} />:<FindUsernameOrPassword />}
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
