import React from "react";
import { Col, Layout, Row } from "antd";

const { Header, Content, Footer } = Layout;

export const AppLayout = (props) => {
  const onExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    window.location.reload();
  };
  return (
    <>
      <Layout style={{ minHeight: "100%", width: "100%" }}>
        <Header>
          <Row style={{ height: "100%" }} align={"middle"} justify={"start"}>
            <Col span={3} style={{ display: "flex" }}>
              <img
                style={{ width: "30px", height: "30px" }}
                alt={""}
                src="/images/logo.png"
              />
            </Col>

            <Col span={16}>
              <div style={{ color: "white" }}>Твой квест</div>
            </Col>
            {localStorage.getItem("access_token") && (
              <Col span={3}>
                <a
                  onClick={onExit}
                  style={{ color: "white", paddingLeft: "10px" }}
                >
                  Выход
                </a>
              </Col>
            )}
          </Row>
        </Header>
        <Layout>
          <Content
            style={{ minHeight: "100%", width: "100%", padding: "5px 20px" }}
          >
            {props.children}
          </Content>
        </Layout>
        <Footer>Contacts: tg - @daniapog</Footer>
      </Layout>
    </>
  );
};
