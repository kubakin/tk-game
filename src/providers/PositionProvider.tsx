import { FC, ReactNode, useEffect } from "react";
import { useMe } from "../data/query/user/me";
import { TEAM_UPDATED, USER_UPDATED } from "../data/query/user/query/Me.query";
import { usePosition } from "../common/hooks/usePosition";

export const PositionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const position = usePosition();
  const { onSendPosition } = useMe();
  const coords = position?.position?.coords;
  useEffect(() => {
    if (coords) {
      onSendPosition({
        dto: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          timestamp: position.position.timestamp,
        },
      });
      console.log(coords);
    }
  }, [coords]);
  return <>{children}</>;
};
