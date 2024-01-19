import { Col, Row } from "antd";
import { useMe } from "../../data/query/user/me";

export const TaskDescription = () => {
  const { me } = useMe();
  const task = me?.data?.me?.team?.gameSession?.currentTask;
  return (
    <>
      <Row>
        <Col>
          <h2>{task.task.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <div dangerouslySetInnerHTML={{ __html: task.task.description }} />
        </Col>
      </Row>
    </>
  );
};
