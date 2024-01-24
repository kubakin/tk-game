import React, { useState } from "react";
import { Button, FloatButton, message, Steps, theme } from "antd";
import styles from "./index.module.scss";
import { TeamContainer } from "../../containers/Team/team.container";
import { GameContainer } from "../../containers/Games/game.container";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useMe } from "../../data/query/user/me";
import { PrepaContainter } from "../../containers/Prepare/Prepare.container";

const AppSteps: React.FC = () => {
  const { token } = theme.useToken();
  const {
    me: {
      data: { me },
    },
  } = useMe();
  const steps = [
    {
      title: "Команда",
      content: <TeamContainer />,
      enable: true,
    },
    {
      title: "Игры",
      content: <GameContainer />,
      enable: !!me.team,
    },
    {
      title: "Подготовка",
      content: <PrepaContainter />,
      enable: !!me?.team?.gameSession?.game,
    },
  ];
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "460px",
    minHeight: "460px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 0,
  };

  return (
    <>
      <Steps
        className={styles.steps}
        type={"inline"}
        progressDot={false}
        direction={"horizontal"}
        size={"small"}
        current={current}
        items={items}
      />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && steps[current + 1].enable && (
          <FloatButton
            shape="circle"
            type="primary"
            onClick={() => next()}
            style={{ right: "10%" }}
            icon={<ArrowRightOutlined />}
          />
        )}

        {current > 0 && (
          <FloatButton
            shape="circle"
            type="primary"
            onClick={() => prev()}
            style={{ left: "10%" }}
            icon={<ArrowLeftOutlined />}
          />
        )}
      </div>
    </>
  );
};

export default AppSteps;
