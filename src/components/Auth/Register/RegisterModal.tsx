import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Input, Row, message } from "antd";
import styles from "./index.module.scss";
// import {Input} from "../../../ui/input";
import React from "react";
import { login, register } from "../../../data/auth/auth.queries";
export const RegisterModal = (props: {
  onClose: () => void;
  open: boolean;
}) => {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
      await register(values);
      window.location.reload();
    } catch (e) {
      //   api.error("Номер не зарегистирован");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      open={props.open}
      onCancel={props.onClose}
      onOk={() => {
        form.validateFields();
        form.submit();
      }}
    >
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: "80%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Введите номер телефона" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Name" name="name" rules={[{ required: false }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
