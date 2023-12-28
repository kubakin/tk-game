import React, {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import NewGameModal from "./NewGame.modal";

export const NewGameAction = () => {
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
    return <>
        <PlusOutlined onClick={showModal} key="setting" name={'test'} title={'test'}/>
        <NewGameModal onClose={handleCancel} visible={isModalOpen}/>
    </>
}