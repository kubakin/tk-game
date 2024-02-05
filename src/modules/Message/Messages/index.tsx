import { useEffect } from "react";
import { useChat } from "../../../data/query/chat/chat";
import { IMessage } from "../../../data/query/chat/query/Chat.query";
import { NEW_MESSAGE_SUBSCRIPTION } from "../../../data/query/chat/query/NewMessage.subscription";

const UserMessage = (props: { message: IMessage }) => {
  return <div>Вы: {props.message.text}</div>;
};

const AdminMessage = (props: { message: IMessage }) => {
  return <div>Модератор: {props.message.text}</div>;
};

export const Messages = () => {
  const { chat } = useChat();
  useEffect(() => {
    chat.subscribeToMore({
      document: NEW_MESSAGE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        const message: IMessage = (subscriptionData?.data as any)
          ?.newMessage as any;

        if (message.adminId) {
          // setUnread(true);
        }
        return { chat: [...prev.chat, message] };
      },
    });
  }, []);
  const messages = chat?.data?.chat || [];
  const renderBySender = (message: IMessage) => {
    if (!!message.adminId) {
      return <AdminMessage message={message} />;
    } else {
      return <UserMessage message={message} />;
    }
  };

  return (
    <>
      {messages.map((it) => {
        return <div style={{ marginBottom: "3px" }}>{renderBySender(it)}</div>;
      })}
    </>
  );
};
