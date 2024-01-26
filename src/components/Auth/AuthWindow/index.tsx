import { useForm } from "react-hook-form";
import { Button, Col, Form, Input, Row, message } from "antd";
import styles from "./index.module.scss";
// import {Input} from "../../../ui/input";
import React, { useState } from "react";
import { login } from "../../../data/auth/auth.queries";
import { RegisterModal } from "../Register/RegisterModal";

export const AuthWindow = () => {
  const {
    register,
    handleSubmit,
    // formState: {},
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className={styles.window}>
        <Col>
          {/*<Input {...register('phone')}/>*/}
          {/*<Input {...register('name')}/>*/}
        </Col>

        <Col>
          <button type={"submit"}>Click</button>
        </Col>
      </Row>
    </form>
  );
};

type FieldType = {
  name?: string;
  phone?: string;
};

const AuthForm = () => {
  const [api, contextHolder] = message.useMessage();
  const [registerModal, setRegisterModal] = useState(false);
  const onFinish = async (values: any) => {
    try {
      const rs = await login(values);
      localStorage.setItem("access_token", rs.accessToken);
      window.location.reload();
    } catch (e) {
      api.error("Номер не зарегистирован");
    }
  };

  const onSwitchHandle = (e) => {
    e.preventDefault();
    setRegisterModal(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: "80%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Введите номер телефона" }]}
        >
          <Input />
        </Form.Item>
        {contextHolder}

        {/* <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item> */}

        <Row justify={"space-between"}>
          <Col>
            <Form.Item>
              <Button
                style={{ backgroundColor: "black" }}
                type="primary"
                htmlType="submit"
              >
                Войти
              </Button>
            </Form.Item>
          </Col>
          <Col>
            {
              <Button onClick={onSwitchHandle} type="link">
                Нет аккаунта
              </Button>
            }
          </Col>
        </Row>
      </Form>
      <RegisterModal
        onClose={() => setRegisterModal(false)}
        open={registerModal}
      />
    </>
  );
};

export default AuthForm;
