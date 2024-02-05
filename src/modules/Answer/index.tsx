import { useState } from "react";
import { useMe } from "../../data/query/user/me";
import { DefaultAnswer } from "./default";
import { GeoAnswer } from "./geo";

export const Answer = () => {
  const {
    onSendAttemt,
    me: { data },
  } = useMe();
  const taskInstance = data?.me?.team?.gameSession?.currentTask;
  const task = data?.me?.team?.gameSession?.currentTask.task;
  const onSubmit = async (answer: unknown) => {
    await onSendAttemt({
      dto: {
        answer: answer,
        taskInstanceId: taskInstance.id,
      },
    });
  };
  const answer = {
    default: <DefaultAnswer onSubmit={onSubmit} />,
    geo: <GeoAnswer onSubmit={onSubmit} />,
  };
  return answer[task.type];
};
