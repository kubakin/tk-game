import { Card, QRCode, Space, theme } from "antd";
import React from "react";
import { useMe } from "../../data/query/user/me";
import { Button } from "antd";
import { usePosition } from "../../common/hooks/usePosition";
import { Cost } from "../../components/Game/fields/Cost";
import { PersonLimit } from "../../components/Game/fields/PersonLimit";
import { TaskStrategy } from "../../components/Game/fields/TaskStrategy";
import { TimeLimit } from "../../components/Game/fields/TimeLimit";
import { PlannedAt } from "../../components/Game/fields/PlannedAt";

const { Meta } = Card;

export const PrepaContainter = () => {
  const {
    me: {
      data: { me },
    },
  } = useMe();
  const game = me.team?.gameSession?.game;
  const gameInstance = me?.team?.gameSession;
  const { token } = theme.useToken();
  const contentStyle: React.CSSProperties = {
    textAlign: "left",
    marginBottom: "20px",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
  };
  console.log(game);
  if (game && gameInstance) {
    return (
      <>
        <Card style={contentStyle}>
          <Meta
            title={`Название: ${game.name}`}
            style={{ paddingBottom: "20px" }}
          />
          <div dangerouslySetInnerHTML={{ __html: game.description }} />
          {/* <QRCode  value="https://picturesofpeoplescanningqrcodes.tumblr.com/" /> */}
          <div>
            <PersonLimit limit={game.personLimit} />
            <TimeLimit limit={game.duration} />
            <Cost cost={game.cost} />
            <TaskStrategy taskStrategy={game.taskStrategy} />
          </div>
        </Card>
        <Card style={contentStyle}>
          <Meta title={`Правила`} style={{ paddingBottom: "20px" }} />
          <div dangerouslySetInnerHTML={{ __html: game.rules }} />
          {/* <QRCode  value="https://picturesofpeoplescanningqrcodes.tumblr.com/" /> */}
        </Card>
        <PlannedAt
          status={gameInstance?.status}
          autoStart={game.autoStart}
          plannedAt={game.plannedAt}
        />
      </>
    );
  }
  return <>Empty</>;
};
