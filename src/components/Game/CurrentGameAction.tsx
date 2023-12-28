import React, {useState} from "react";
import CurrentGameChangeModal from "../../components/Game/CurrentGameChange.modal";
import {EditOutlined} from "@ant-design/icons";

export const CurrentGameAction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return <><EditOutlined onClick={showModal} key="setting" name={'test'} title={'test'}/><CurrentGameChangeModal
        onClose={handleCancel} visible={isModalOpen}/></>
}