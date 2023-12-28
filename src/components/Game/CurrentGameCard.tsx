import {Card, theme} from "antd";
import React from "react";
import {GameDescription} from "./GameDescription";
import {CurrentGameAction} from "./CurrentGameAction";
import {NewGameAction} from "./NewGameAction";
import { useMe } from "../../data/query/user/me";

const {Meta} = Card;


export const CurrentGameCard = () => {
    const {me: {data: {me: {team: {gameSession: {game}}}}}} = useMe()
    const {token} = theme.useToken();
    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
    };
    return <Card
        style={contentStyle}
        actions={[
            <NewGameAction/>,
            <CurrentGameAction/>,
        ]}
    >
        <Meta
            title={game.name}
            description={<GameDescription/>}
        />
    </Card>
}