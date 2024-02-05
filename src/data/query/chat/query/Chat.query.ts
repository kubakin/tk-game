import { gql } from "@apollo/client";


export const CHAT_QUERY = gql`
	query chat  {
		chat {
      id
      text
      teamId
      adminId
      userId
    }
	}
`;

export interface IMessage {
  id: string;
  text: string
  teamId: string
  adminId: string
  userId: string
  
}
