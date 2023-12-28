import {Card, theme} from "antd";
import React from "react";
import {NewGameAction} from "./NewGameAction";
import {CurrentGameAction} from "./CurrentGameAction";

const {Meta} = Card;


export const NoGameCard = () => {
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
            style={{height: '50px'}}
            title={'Нет активной игры.'}
        />
        <p>Нет активной игры. Создайте новую (+) или выберете из ранее созданных</p>
        {/*<Meta*/}
        {/*    title={`Тайна цирка дельторро`}*/}
        {/*    description={<GameDescription/>}*/}
        {/*/>*/}
    </Card>
}