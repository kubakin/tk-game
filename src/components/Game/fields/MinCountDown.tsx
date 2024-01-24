import { useEffect, useState } from "react";
import { minCount } from "../../../common/lib/MinCountDown";

export const MinCountDown = (props: { end: Date }) => {
  const [min, setMin] = useState(0);

  useEffect(() => {
    if (!props.end) setMin(0);
    const intervalId = setInterval(() => {
      setMin(minCount(new Date(), props.end));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <>{min.toFixed(0)}</>;
};
