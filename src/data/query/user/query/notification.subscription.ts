import { gql } from "@apollo/client";

export const NOTIFICATION_SUBSCRIPTION = gql`
  subscription notifyUser {
    notifyUser {
      text
      type
    }
  }
`;

export interface SendPositionDto {
  dto: {
    timestamp: number;
    latitude: number;
    longitude: number;
  };
}
