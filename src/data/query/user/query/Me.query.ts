import { gql } from "@apollo/client";
export enum GameInstanceStatusEnum {
  Created = "Created",
  Started = "Started",
  Finished = "Finished",
  Released = "Released",
  Approved = "Approved",
}

const teamFields = gql`
  {
    id
    name
    createdBy
    gameSession {
      id
      score
      progressTasks
      endAt
      startedAt
      totalTasks
      status
      currentTask {
        id
        task {
          name
          description
          type
        }
      }
      game {
        id
        name
        rules
        autoStart
        description
        finalText
        personLimit
        plannedAt
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
      createdBy: string;
      name: string;
      gameSession: {
        id: string;
        status: GameInstanceStatusEnum;
        score: number;
        endAt: Date;
        startedAt: Date;
        progressTasks: number;
        totalTasks: number;
        currentTask: {
          id: string;
          task: {
            description: string;
            name: string;
            type: string;
          };
        };
        game: {
          id: string;
          name: string;
          description: string;
          rules: string;
        finalText: string;
          personLimit: number;
          plannedAt: Date;
          cost: number;
          autoStart: boolean;
          duration: number;
          taskStrategy: string;
        };
      };
    };
  };
}
