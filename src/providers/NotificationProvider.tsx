import { FC, ReactNode, useEffect } from "react";
import { useMe } from "../data/query/user/me";
import { TEAM_UPDATED, USER_UPDATED } from "../data/query/user/query/Me.query";
import { usePosition } from "../common/hooks/usePosition";
import { useSubscription } from "@apollo/client";
import { NOTIFICATION_SUBSCRIPTION } from "../data/query/user/query/notification.subscription";
import { message } from "antd";

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data } = useSubscription(NOTIFICATION_SUBSCRIPTION);
  useEffect(() => {
    if (data?.notifyUser) {
      message[data.notifyUser.type](data.notifyUser.text);
    }
  }, [data?.notifyUser]);
  return <>{children}</>;
};
