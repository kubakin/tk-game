import {useMutation, useQuery} from "@apollo/client";
import {USER_LEAVE} from "./query/Leave.mutation";
import {GET_USER_ME, UseMeData} from "./query/Me.query";


export const useMe = () => {
    const me = useQuery<UseMeData>(GET_USER_ME);
    const [leave] = useMutation(USER_LEAVE)

    return {
        me,
        leave
    }
}

