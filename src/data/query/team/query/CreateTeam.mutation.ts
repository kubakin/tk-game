import {gql} from "@apollo/client";

export const CREATE_TEAM = gql`
	mutation CreateTeam($dto: CreateTeamDto!) {
  createTeam(dto:$dto) 
}
`;

export interface CreateTeamDto {
    name: string
}