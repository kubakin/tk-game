import {Button, Card, theme} from "antd";
import React from "react";
import {PersonLimit} from "./fields/PersonLimit";
import {Cost} from "./fields/Cost";
import {TimeLimit} from "./fields/TimeLimit";
import {TaskStrategy} from "./fields/TaskStrategy";

const {Meta} = Card;

interface GameItemInterface {
    id: string;
    name: string;
    description: string
    personLimit: number
    cost: number
    duration: number
    taskStrategy: string
    onClick?: () => void
}

export const GameItem = (props: GameItemInterface) => {
    const {token} = theme.useToken();
    const contentStyle: React.CSSProperties = {
        textAlign: 'left',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
    };
    return <Card
        style={contentStyle}
    >
        <img
            style={{maxWidth: '100%'}}
            alt={''}
            src="/images/logo.png"/>
        <Meta
            title={`Название: ${props.name}`}
            style={{paddingBottom: '20px'}}
            description={`Описание: ${props.description}`}
        />
        <div>
            <PersonLimit limit={props.personLimit}/>
            <TimeLimit limit={props.duration}/>
            <Cost cost={props.cost}/>
            <TaskStrategy taskStrategy={props.taskStrategy}/>
        </div>
        {props.onClick && <Button onClick={props.onClick} style={{width: '100%'}}>Выбрать</Button>}
    </Card>
}