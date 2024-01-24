import { gql } from "@apollo/client";

export const USER_JOIN = gql`
  mutation join($teamId: String!) {
    join(teamId: $teamId)
  }
`;
