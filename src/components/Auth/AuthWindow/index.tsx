import {useForm} from 'react-hook-form';
import {Button, Col, Form, Input, Row} from "antd";
import styles from './index.module.scss'
// import {Input} from "../../../ui/input";
import React from 'react';

export const AuthWindow = () => {
    const {
        register,
        handleSubmit,
        // formState: {},
    } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className={styles.window}>
                <Col>
                    {/*<Input {...register('phone')}/>*/}
                    {/*<Input {...register('name')}/>*/}
                </Col>

                <Col>
                    <button type={'submit'}>Click</button>
                </Col>
            </Row>
        </form>
    )
}


type FieldType = {
    name?: string;
    phone?: string;
};

const AuthForm = ({hasAccountAuth}) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onSwitchHandle = (e) => {
        e.preventDefault()
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: '80%'}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Phone"
                name="phone"
                rules={[{required: true, message: 'Введите номер телефона'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[{required: false}]}
            >
                <Input/>
            </Form.Item>

            <Row justify={'space-between'}>
                <Col>
                    <Form.Item>
                        <Button style={{backgroundColor: 'black'}} type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                </Col>
                <Col>

                    {hasAccountAuth && <Button onClick={onSwitchHandle} type="link">
                        Нет аккаунта
                    </Button>}
                    {!hasAccountAuth && <Button onClick={onSwitchHandle} type="link">
                        Есть аккаунт
                    </Button>}
                </Col>
            </Row>

        </Form>
    )
}

export default AuthForm;