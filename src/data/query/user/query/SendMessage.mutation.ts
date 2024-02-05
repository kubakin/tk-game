import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation sendMessage($message: String!) {
    sendMessage(message: $message)
  }
`;

export interface SendMessageDto {
  message: string;
}
