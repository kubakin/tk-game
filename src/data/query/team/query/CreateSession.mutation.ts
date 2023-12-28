import { gql } from "@apollo/client";

export const CREATE_SESSION = gql`
  mutation CreateSession($gameId: String!) {
    createSession(gameId: $gameId)
  }
`;

export interface CreateSessionDto {
  gameId: string;
}
