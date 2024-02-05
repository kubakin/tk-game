import { Button, Input, Space } from "antd";
import { useState } from "react";
import { useMe } from "../../data/query/user/me";
interface IAnswerDefault {
  onSubmit: (answer: { value: string }) => void;
}
export const DefaultAnswer = (props: IAnswerDefault) => {
  const [val, setVal] = useState("");
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        placeholder="Ответ"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Button
        onClick={() => {
          props.onSubmit({
            value: val,
          });
          setVal("");
        }}
      >
        Send
      </Button>
    </Space.Compact>
  );
};
