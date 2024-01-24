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
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          {" "}
          <div dangerouslySetInnerHTML={{ __html: task.task.description }} />
        </Col>
      </Row>
    </>
  );
};
