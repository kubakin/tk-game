import { gql, useMutation, useQuery } from "@apollo/client";
import { CREATE_TEAM, CreateTeamDto } from "./query/CreateTeam.mutation";
import {
  CREATE_SESSION,
  CreateSessionDto,
} from "./query/CreateSession.mutation";

const GET_USER_ME = gql`
  query GetUserMe {
    me {
      id
      team {
        id
        name
      }
    }
  }
`;

const CHANGE_SESSION = gql`
  mutation changeSession($id: String!) {
    changeSession(id: $id)
  }
`;

interface UseMeData {
  me: {
    id: string;
    team: {
      id: string;
      name: string;
    };
  };
}

export const useTeam = () => {
  const query = useQuery<UseMeData>(GET_USER_ME);
  const [changeSession] = useMutation(CHANGE_SESSION);
  const [createTeam] = useMutation<
    { createTeam: string },
    { dto: CreateTeamDto }
  >(CREATE_TEAM);
  const [createSession] = useMutation<
    { createSession: string },
    CreateSessionDto
  >(CREATE_SESSION);
  return {
    ...query,
    changeSession,
    createTeam,
    createSession,
  };
};
