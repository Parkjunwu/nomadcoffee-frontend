import { ApolloClient, makeVar, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { urlLink } from './urlLink';

const TOKEN = "token";
const DARK_MODE = "DARK_MODE"

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const changeDarkMode = () => {
  const darkMode = darkModeVar()
  const result = darkModeVar(!darkMode);
  result?localStorage.setItem(DARK_MODE,"yes"):localStorage.removeItem(DARK_MODE);
}

export const logInUser = (token:string) => {
  localStorage.setItem(TOKEN,token)
  isLoggedInVar(true);
};

export const logOutUser = (history?:{replace:Function,push:Function}) => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  history?.replace();
  history?.push(urlLink.HOME);
  // window.location.reload();
};

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(TOKEN);
  return {
    headers: {
      ...headers,
      token
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});