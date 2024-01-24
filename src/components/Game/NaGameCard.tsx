import { Card, theme } from "antd";
import React from "react";
import { NewGameAction } from "./NewGameAction";
import { CurrentGameAction } from "./CurrentGameAction";
import { WaitForAdmin } from "../../helpers/WaitForAdmin";
import { useMe } from "../../data/query/user/me";

const { Meta } = Card;

export const NoGameCard = () => {
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
  const actions = [<NewGameAction />, <CurrentGameAction />];
  return (
    <Card
      style={contentStyle}
      actions={me.id === me.team.createdBy ? actions : []}
    >
      <Meta style={{ height: "50px" }} title={"Нет активной игры."} />
      <p>
        Нет активной игры. Создайте новую (+) или выберете из ранее созданных
      </p>
      <WaitForAdmin />
      {/*<Meta*/}
      {/*    title={`Тайна цирка дельторро`}*/}
      {/*    description={<GameDescription/>}*/}
      {/*/>*/}
    </Card>
  );
};
