import { PlusOutlined } from "@ant-design/icons/lib/icons";
import { Card, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useMe } from "../../data/query/user/me";
import CreateTeamModal from "./CreateTeam.modal";
import { useNavigate, useSearchParams } from "react-router-dom";

const { Meta } = Card;

export const NotExistTeam = () => {
  const {
    me: {
      data: { me },
    },
    leave,
    join,
  } = useMe();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const teamId = searchParams.get("join");
  useEffect(() => {
    if (teamId) {
      join({ variables: { teamId: teamId } }).then(() => {
        setTimeout(() => {
          window.location.replace("/prepare");
        }, 500);
      });
    }
  }, [teamId]);
  const [modal, setModal] = useState<boolean>(false);
  if (me?.team) {
    return <></>;
  }
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
          <PlusOutlined key="setting" onClick={() => setModal(true)} />,
        ]}
      >
        <Meta style={{ height: "50px" }} title={"Нет команды"} />
        <p>
          Создайте новую команду или вступите по ссылке уже существующей команды
        </p>
      </Card>
      <CreateTeamModal visible={modal} onClose={() => setModal(false)} />
    </>
  );
};
