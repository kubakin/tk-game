import { TaskDescription } from "../../components/Task/TaskDescription";
import { TaskHeader } from "../../components/Task/TaskHeader";
import { AnswerContainer } from "../Answer/answer.container";

export const ProgressContainer = () => {
  return (
    <>
      <TaskHeader />
      <TaskDescription />
      {/* <AppSteps/> */}
      <AnswerContainer />
    </>
  );
};
