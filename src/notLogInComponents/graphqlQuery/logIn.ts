import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username:$username, password:$password){
      ok
      error
      token
    }
  }
`;

export default LOGIN_MUTATION;