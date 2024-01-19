import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import AuthForm from "../../components/Auth/AuthWindow";
import { AppLayout } from "../../components/Layout";
import styles from "./index.module.scss";

export const AuthPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const [hasAccountAuth, setHasAccountAuth] = useState(false);

  return (
    <AppLayout>
      <Row
        className={styles.loginPage}
        style={{ height: "90%", overflow: "hidden" }}
        gutter={0}
        justify={"space-around"}
        align={"middle"}
      >
        <AuthForm />
      </Row>
    </AppLayout>
  );
};
