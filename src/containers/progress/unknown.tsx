import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UnknownProgress = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/prepare");
  }, []);
  return <></>;
};
