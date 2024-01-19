import { Badge, Col, Progress, Row } from "antd";
import { useMe } from "../../data/query/user/me";
import React from "react";
import { EditOutlined, MessageOutlined } from "@ant-design/icons";
import CountDown from "ant-design-pro/lib/CountDown";
export const TaskHeader = () => {
  const { me } = useMe();
  const task = me?.data?.me?.team?.gameSession?.currentTask;
  const score = me?.data?.me?.team?.gameSession?.score;
  const targetTime = new Date().getTime() + 3900000;
  return (
    <>
      <Row justify={"start"}>
        <Col offset={1} span={10}>
          Счет: {score}
        </Col>
      </Row>
      <Row>
        <Progress percent={50} size="small" status="active" />
      </Row>
      <Row justify={"center"}>
        <Col span={18}>
          <CountDown target={targetTime} style={{ fontSize: 16 }} />
        </Col>
        <Col>
          <Badge dot>
            <MessageOutlined style={{ fontSize: 24 }} />
          </Badge>
        </Col>
      </Row>
    </>
  );
};
