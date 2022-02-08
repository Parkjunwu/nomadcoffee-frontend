import { gql } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $username:String!,
    $password:String!,
    $email:String!,
    $name:String!,
    $location:String!,
    $avatarURL:Upload,
    $githubUsername:String,
  ) {
    createUser(
      username:$username,
      password:$password,
      email:$email,
      name:$name,
      location:$location,
      avatarURL:$avatarURL,
      githubUsername:$githubUsername,
    ) {
      ok
      error
    }
  }
`;

export default CREATE_USER_MUTATION;