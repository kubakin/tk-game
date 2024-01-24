import { Card, theme } from "antd";
import React from "react";
import { GameDescription } from "./GameDescription";
import { CurrentGameAction } from "./CurrentGameAction";
import { NewGameAction } from "./NewGameAction";
import { useMe } from "../../data/query/user/me";
import { WaitForAdmin } from "../../helpers/WaitForAdmin";

const { Meta } = Card;

export const CurrentGameCard = () => {
  const {
    me: {
      data: { me },
    },
  } = useMe();
  const { token } = theme.useToken();
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
  };
  const action = [<NewGameAction />, <CurrentGameAction />];

  return (
    <Card
      style={contentStyle}
      actions={me.id === me.team.createdBy ? action : []}
    >
      <Meta
        title={me.team.gameSession.game.name}
        description={<GameDescription />}
      />
      <WaitForAdmin />
    </Card>
  );
};
