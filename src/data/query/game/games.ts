import {gql, useQuery} from "@apollo/client";

const GET_GAMES = gql`
	query GetGames {
		user_game_list {
			id
			name
			description
			personLimit
			cost
			taskStrategy
		}
	}
`;

interface UseGamesData {
    user_game_list: {
        id: string
        name: string;
        description: string;
        personLimit: number;
        cost: number;
        duration: number;
        taskStrategy: string;
    }[]
}

export const useGames = () => {
    const query = useQuery<UseGamesData>(GET_GAMES);
    return {
        ...query,
    }
}

