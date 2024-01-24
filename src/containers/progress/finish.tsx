import { Button } from "antd";
import { TaskDescription } from "../../components/Task/TaskDescription";
import { TaskHeader } from "../../components/Task/TaskHeader";
import { useMe } from "../../data/query/user/me";
import { AnswerContainer } from "../Answer/answer.container";
import { WaitForAdmin } from "../../helpers/WaitForAdmin";
import { useTeam } from "../../data/query/team/team";

export const FinishContainer = () => {
  const {
    me: { data },
  } = useMe();
  const { closeSession } = useTeam();
  const gameInstance = data?.me?.team?.gameSession;
  return (
    <>
      <TaskHeader />
      <div dangerouslySetInnerHTML={{ __html: gameInstance.game.finalText }} />
      <WaitForAdmin>
        <Button onClick={() => closeSession()} type="primary">
          Закончить
        </Button>
      </WaitForAdmin>
    </>
  );
};
