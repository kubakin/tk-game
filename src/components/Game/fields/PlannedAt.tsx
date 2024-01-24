import { Button, Card, Progress, Statistic } from "antd";
import React, { useState } from "react";
import { GameInstanceStatusEnum } from "../../../data/query/user/query/Me.query";
import { useLocation, useNavigate } from "react-router-dom";

const { Countdown } = Statistic;
export const PlannedAt = (props: {
  plannedAt: Date;
  autoStart: boolean;
  status: GameInstanceStatusEnum;
  children?: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const [timeOk, setTimeOk] = useState(false);
  if (
    [GameInstanceStatusEnum.Started, GameInstanceStatusEnum.Finished].includes(
      props.status
    )
  ) {
    return (
      <Button onClick={() => navigate("/game")} style={{ width: "100%" }}>
        Начать игру
      </Button>
    );
  }
  if (props.status === GameInstanceStatusEnum.Created) {
    return <>Ожидается оплата</>;
  }
  if (!props.plannedAt) return <></>;

  const deadline = new Date(props.plannedAt).getTime();
  return (
    <Progress
      type="circle"
      percent={1}
      format={() => (
        <Countdown
          onFinish={() => setTimeOk(true)}
          title="До след игры:"
          value={deadline}
        />
      )}
    />
  );
};
