import React from "react";
import { useMe } from "../data/query/user/me";

export const WaitForAdmin = (props: {
  children?: React.ReactNode;
  text?: string;
}) => {
  const { me } = useMe();
  if (me.data.me.id === me.data.me.team.createdBy) {
    return <>{props.children}</>;
  }
  return (
    <p style={{ fontWeight: 700, textAlign: "center" }}>
      {props.text || "Подождите пока создатель команды продолжит"}{" "}
    </p>
  );
};
