import React from 'react';
import {Modal, Table} from 'antd';
import {useTeamGames} from "../../data/query/game-instance/team-games";
import {GameStatus} from "./GameStatus";
import {useTeam} from "../../data/query/team/team";

const CurrentGameChangeModal = (props: { visible: boolean, onClose: () => void }) => {
    const games = useTeamGames();
    const team = useTeam()
    const onChange = async (id: string) => {
        await team.changeSession({variables: {id}})
        props.onClose()
    }
    return (
        <>
            <Modal title="Созданные игры" open={props.visible} onCancel={props.onClose}>
                <Table
                    rowKey={"id"}
                    loading={games.loading}
                    size={'small'}
                    pagination={false}
                    onRow={row => ({
                        onClick: () => onChange(row.id)
                    })}
                    dataSource={games?.data?.user_game_instance_list}
                    columns={[
                        {
                            title: "Название",
                            key: "game",
                            dataIndex: "game",
                            render: (it) => it?.name
                        },
                        {
                            title: "Статус",
                            key: "status",
                            dataIndex: "status",
                            render: (it) => <GameStatus status={it}/>
                        },
                    ]}
                />
            </Modal>
        </>
    );
};

export default CurrentGameChangeModal;