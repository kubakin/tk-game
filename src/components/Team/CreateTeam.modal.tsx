import React from 'react';
import {Form, Input, Modal} from 'antd';
import {useTeam} from "../../data/query/team/team";

const CreateTeamModal = (props: { onClose: () => void, visible: boolean }) => {
    const {createTeam} = useTeam()
    const [form] = Form.useForm();
    const onOk = () => {
        form.submit();
    };

    const submit = async (val: any) => {
        await createTeam({variables: {dto: val}})
        props.onClose();
    }


    return (
        <Modal open={props.visible} onCancel={props.onClose} onOk={onOk}>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: '80%'}}
                initialValues={{remember: true}}
                onFinish={submit}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Название"
                    name="name"
                    rules={[{required: true, message: 'Введите номер название команды'}]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateTeamModal;