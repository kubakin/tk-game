import {Card} from "antd";
import React from "react";
import {useMe} from "../../data/query/user/me";
import {CurrentGameCard} from "../../components/Game/CurrentGameCard";
import {NoGameCard} from "../../components/Game/NaGameCard";

const {Meta} = Card;


export const GameContainer = () => {
    const {me: {data: {me}}} = useMe()
    if (me.team.gameSession) {
        return <CurrentGameCard/>
    } else {
        return <NoGameCard/>
    }
}