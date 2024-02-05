import { Badge, Col, Progress, Row } from "antd";
import { useMe } from "../../data/query/user/me";
import React, { useState } from "react";
import { EditOutlined, MessageOutlined } from "@ant-design/icons";
import { MessageDrawer } from "./Drawer";
import { useChat } from "../../data/query/chat/chat";

export const Message = () => {
  const [drawer, setDrawer] = useState(false);
  const { unread } = useChat();
  console.log(unread);
  return (
    <>
      <Badge dot={unread}>
        <MessageOutlined
          style={{ fontSize: 24 }}
          onClick={() => setDrawer(true)}
        />
      </Badge>
      <MessageDrawer onClose={() => setDrawer(false)} open={drawer} />
    </>
  );
};
