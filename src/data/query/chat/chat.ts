import { useQuery } from "@apollo/client";
import { CHAT_QUERY, IMessage } from "./query/Chat.query";
import { NEW_MESSAGE_SUBSCRIPTION } from "./query/NewMessage.subscription";
import { useEffect, useState } from "react";

export const useChat = () => {
  const chat = useQuery<{ chat: IMessage[] }>(CHAT_QUERY);
  const [unread, setUnread] = useState(false);

  return {
    chat,
    unread,
    readAll: () => setUnread(false),
  };
};
