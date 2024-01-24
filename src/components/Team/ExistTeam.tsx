import { CloseOutlined } from "@ant-design/icons";
import { CopyButton } from "../../ui/CopyButton";
import { Card, theme } from "antd";
import React from "react";
import { useMe } from "../../data/query/user/me";

const { Meta } = Card;

export const ExistTeam = () => {
  const {
    me: {
      data: { me },
      networkStatus,
    },
    leave,
  } = useMe();
  const { token } = theme.useToken();
  const contentStyle: React.CSSProperties = {
    // minHeight: '300px',
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
  };
  return (
    <>
      <Card
        style={contentStyle}
        actions={[
          <CloseOutlined key="ellipsis" onClick={async () => await leave()} />,
        ]}
      >
        <Meta style={{ height: "50px" }} title={me?.team?.name} />
        <div>
          <p style={{ textAlign: "start" }}>
            Отправьте участникам ссылку на вступление:
          </p>
          <CopyButton
            text={`${window.location.origin}/prepare?join=${me?.team?.id}`}
          />
        </div>
      </Card>
    </>
  );
};
