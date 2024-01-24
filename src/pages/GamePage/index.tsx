import { AppLayout } from "../../components/Layout";
import { TaskDescription } from "../../components/Task/TaskDescription";
import { TaskHeader } from "../../components/Task/TaskHeader";
import { AnswerContainer } from "../../containers/Answer/answer.container";
import { ProgressContainer } from "../../containers/progress";
import { FinishContainer } from "../../containers/progress/finish";
import { UnknownProgress } from "../../containers/progress/unknown";
import { useMe } from "../../data/query/user/me";
import { GameInstanceStatusEnum } from "../../data/query/user/query/Me.query";

export const GamePage = () => {
  const {
    me: { data },
  } = useMe();
  const gameInstance = data?.me?.team?.gameSession;
  const byStatus = {
    [GameInstanceStatusEnum.Started]: <ProgressContainer />,
    [GameInstanceStatusEnum.Finished]: <FinishContainer />,
  };
  return (
    <AppLayout>
      {byStatus[gameInstance?.status] || <UnknownProgress />}
    </AppLayout>
  );
};
