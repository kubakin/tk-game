import { Drawer } from "antd";
import { MessageInput } from "../MessageInput";
import { useMe } from "../../../data/query/user/me";
import { Messages } from "../Messages";
import { useChat } from "../../../data/query/chat/chat";
import { useEffect } from "react";

export const MessageDrawer = (props: {
  open: boolean;
  onClose: () => void;
}) => {
  const { onSendMessage } = useMe();
  const { readAll } = useChat();
  useEffect(() => {
    if (props.open) {
      readAll();
    }
  }, [props.open]);
  const onSend = async (value: string) => {
    await onSendMessage(value);
  };
  return (
    <>
      <Drawer
        footer={<MessageInput onSend={onSend} />}
        open={props.open}
        onClose={props.onClose}
      >
        <Messages />
      </Drawer>
    </>
  );
};
