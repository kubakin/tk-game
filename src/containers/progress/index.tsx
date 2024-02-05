import { TaskDescription } from "../../components/Task/TaskDescription";
import { TaskHeader } from "../../components/Task/TaskHeader";
import { Answer } from "../../modules/Answer";

export const ProgressContainer = () => {
  return (
    <>
      <TaskHeader />
      <TaskDescription />
      {/* <AppSteps/> */}
      <Answer />
    </>
  );
};
