import {
  ApolloClient,
  InMemoryCache,
  makeVar,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);