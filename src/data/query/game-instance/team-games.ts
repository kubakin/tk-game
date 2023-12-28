import {gql, useQuery} from "@apollo/client";

const GET_TEAM_GAMES = gql`
	query GetTeamGames {
        user_game_instance_list {
            id
            status
            team {
                id
                name
            }
            game {
                id
                name
            }
        }
}
`;

interface UseTeamGamesData {
    user_game_instance_list: {
        id: string
        status: string;
        game: {
            id: string;
            name: string
        }
        team: {
            id: string
            name: string
        }
    }[]
}

export const useTeamGames = () => {
    const query = useQuery<UseTeamGamesData>(GET_TEAM_GAMES);
    return {
        ...query
    }
}

