import React from "react";
import {useMe} from "../../data/query/user/me";

export const GameDescription = () => {
    const {me: {data: {me}}} = useMe();
    return <>
        <div>
            <img
                style={{maxWidth: '100%'}}
                alt={''}
                src="/images/logo.png"/>
        </div>
        <div>{me?.team?.gameSession?.game?.description}</div>
    </>
}