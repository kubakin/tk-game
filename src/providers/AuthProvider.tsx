import {FC, ReactNode, useEffect} from "react";
import {useMe} from "../data/query/user/me";
import {TEAM_UPDATED, USER_UPDATED} from "../data/query/user/query/Me.query";

export const UserAuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const {me: {data, subscribeToMore}} = useMe()

    // useEffect(()=> {
    //     if (data?.me?.team) {
    //         subscribeToMore(({
    //             document: TEAM_UPDATED,
    //             updateQuery: (prev, {subscriptionData}) => {
    //                 prev.me.team = (subscriptionData?.data as any)?.teamUpdated
    //                 return {me: prev.me}
    //             }
    //         }))
    //     }
    // }, [data?.me?.team])


    useEffect(()=> {
        if (data?.me) {
            subscribeToMore(({
                document: USER_UPDATED,
                updateQuery: (prev, {subscriptionData}) => {
                    const me = (subscriptionData?.data as any)?.userUpdated;
                    return {me: prev.me || me}
                }
            }))
        }
    }, [data?.me])

   
    if (data?.me) {
        return <>{children}</>
    }
    return <>Auth pls</>
}