import { Button, Input } from "antd";
import { useState } from "react";
import { useMe } from "../../data/query/user/me";
import { AnswerDefault } from "../../components/Answer/answer.default";

export const AnswerContainer = () => {
  const [val, setVal] = useState("");
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
    default: <AnswerDefault onSubmit={onSubmit} />,
  };
  return answer[task.type];
  return (
    <div>
      <Input value={val} onChange={(e) => setVal(e.target.value)} />
      <Button
        onClick={() =>
          onSendAttemt({
            dto: {
              answer: { value: val },
              taskInstanceId: data.me.team.gameSession.currentTask.id,
            },
          })
        }
      >
        Send
      </Button>
    </div>
  );
};
