import { ApolloClient, makeVar, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const TOKEN = "token";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

export const logInUser = (token:string) => {
  localStorage.setItem(TOKEN,token)
  isLoggedInVar(true);
};

export const logOutUser = (history?:{replace:Function}) => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  history?.replace()
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