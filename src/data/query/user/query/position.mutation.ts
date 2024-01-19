import { gql } from "@apollo/client";

export const POSITION_SAVE = gql`
  mutation SendPosition($dto: SendPositionDto!) {
    send_position(dto: $dto)
  }
`;

export interface SendPositionDto {
  dto: {
    timestamp: number;
    latitude: number;
    longitude: number;
  };
}
