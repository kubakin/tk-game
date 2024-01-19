import { gql } from "@apollo/client";

export const SEND_ATTEMPT = gql`
  mutation SendAttempt($dto: SendAttemptDto!) {
    sendAttempt(dto: $dto)
  }
`;

export interface SendAttemptDto {
  dto: {
    answer: unknown;
    taskInstanceId: string;
  };
}
