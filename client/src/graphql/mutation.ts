import gql from "graphql-tag";
export const REGISTER = gql`
  mutation REGISTER(
    $username: String!
    $email: String!
    $password: String!
    $job: String
    $classroom: ID!
  ) {
    register(
      input: {
        username: $username
        email: $email
        password: $password
        job: $job
        classroom: $classroom
      }
    ) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
        email
        id
        job
        description
      }
    }
  }
`;
