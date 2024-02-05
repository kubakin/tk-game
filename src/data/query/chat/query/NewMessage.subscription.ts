import { gql } from "@apollo/client";

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription newMessage {
    newMessage {
      id
      text
      teamId
      adminId
      userId
    }
  }
`;
