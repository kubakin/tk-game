import {Button, Input, message} from "antd";
import {CopyOutlined} from "@ant-design/icons";
import React from "react";
import copy from "copy-to-clipboard";

export const CopyButton = (props: { text: string }) => {
    const [api, contextHolder] = message.useMessage();
    const openNotification = () => {
        message.info('Скопировано')
    };

    const onClick = () => {
        copy(props.text)
        openNotification()
    }
    return <div style={{display: 'flex'}}>
        {contextHolder}
        <Input value={props.text} disabled={true}/>
        <Button style={{marginLeft: '10px'}} onClick={onClick}
                icon={<CopyOutlined key="edit"/>}/>
    </div>
}