import { Button, Input, Space } from "antd";
import { useState } from "react";
import { useMe } from "../../data/query/user/me";
import { usePosition } from "../../common/hooks/usePosition";
interface IAnswerGeo {
  onSubmit: (answer: { latitude: number; longitude: number }) => void;
}

const NoPosition = () => {
  return <>Нет доступа к геоданным</>;
};

export const GeoAnswer = (props: IAnswerGeo) => {
  const [val, setVal] = useState("");
  const position = usePosition();
  if (!position?.position?.coords) return <NoPosition />;
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        placeholder="Долгота"
        disabled={true}
        value={position?.position?.coords?.latitude}
      />
      <Input
        value={position?.position?.coords?.longitude}
        placeholder="широта"
        disabled={true}
      />
      <Button
        onClick={() => {
          props.onSubmit({
            longitude: position.position.coords.longitude,
            latitude: position.position.coords.latitude,
          });
          setVal("");
        }}
      >
        На месте
      </Button>
    </Space.Compact>
  );
};
