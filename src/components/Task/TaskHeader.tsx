import { Badge, Col, Progress, Row } from "antd";
import { useMe } from "../../data/query/user/me";
import React from "react";
import { EditOutlined, MessageOutlined } from "@ant-design/icons";
import { MinCountDown } from "../Game/fields/MinCountDown";
import { Message } from "../../modules/Message";
// import CountDown from "ant-design-pro/lib/CountDown";
export const TaskHeader = () => {
  const { me } = useMe();
  const gameInstance = me?.data?.me?.team?.gameSession;
  const task = gameInstance?.currentTask;
  const score = gameInstance?.score;
  return (
    <>
      <Row justify={"start"}>
        <Col offset={1} span={10}>
          Счет: {score}
        </Col>
      </Row>
      <Row>
        <Progress
          showInfo={false}
          percent={(gameInstance.progressTasks / gameInstance.totalTasks) * 100}
          size="small"
          status="active"
        />
      </Row>
      <Row justify={"start"}>
        <Col span={17}>
          {gameInstance.endAt && (
            <>
              Осталось{" "}
              <MinCountDown
                end={new Date(gameInstance.endAt)}
              />
              {" минут"}
            </>
          )}
        </Col>
        <Col offset={4}>
          <Message/>
        </Col>
      </Row>
    </>
  );
};
