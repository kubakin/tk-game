import { gql } from "@apollo/client";

export const CLOSE_SESSION = gql`
  mutation CloseSession {
    closeSession
  }
`;
