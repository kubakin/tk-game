import { gql } from "@apollo/client";

const teamFields = gql`
  {
    id
    name
    gameSession {
      id
      game {
        id
        name
        description
        personLimit
        cost
        taskStrategy
      }
    }
  }
`;

const userFields = gql`{
			id
			team ${teamFields}
		}`;

// const userFields = gql`{
// 			id
// 			team {
// 		  	    id
// 			    name
// 			    gameSession {
// 			        id
// 			        game {
// 			            id
// 			            name
// 			            description
// 			        }
// 			    }
// 			}
// 		}`

export const GET_USER_ME = gql`
	query GetUserMe {
		me ${userFields}
	}
`;

export const USER_UPDATED = gql`
	subscription UserUpdated  {
		userUpdated ${userFields}
	}
`;

export const TEAM_UPDATED = gql`
	subscription TeamUpdated  {
		teamUpdated ${userFields}
	}
`;

export interface UseMeData {
  me: {
    id: string;
    team: {
      id: string;
      name: string;
      gameSession: {
        id: string;
        game: {
          id: string;
          name: string;
          description: string;
          personLimit: number;
          cost: number;
          duration: number;
          taskStrategy: string;
        };
      };
    };
  };
}
