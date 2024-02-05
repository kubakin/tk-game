import { Button, Input, Space } from "antd";
import { useState } from "react";
import { useMe } from "../../../data/query/user/me";

export const MessageInput = (props: { onSend: (value: string) => void }) => {
  const [value, setValue] = useState("");
  const onSend = () => {
    props.onSend(value);
    setValue("");
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        placeholder="Сообщение"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={onSend}>Send</Button>
    </Space.Compact>
  );
};
