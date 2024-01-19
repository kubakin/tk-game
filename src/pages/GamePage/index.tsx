import { AppLayout } from "../../components/Layout";
import { TaskDescription } from "../../components/Task/TaskDescription";
import { TaskHeader } from "../../components/Task/TaskHeader";
import { AnswerContainer } from "../../containers/Answer/answer.container";

export const GamePage = () => {
  return (
    <AppLayout>
      <TaskHeader />
      <TaskDescription />
      {/* <AppSteps/> */}
      <AnswerContainer />
    </AppLayout>
  );
};
