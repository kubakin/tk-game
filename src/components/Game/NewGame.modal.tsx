import React from 'react';
import {Modal} from 'antd';
import {useGames} from "../../data/query/game/games";
import {GameItem} from "./GameItem";
import { useTeam } from '../../data/query/team/team';

const NewGameModal = (props: { visible: boolean, onClose: () => void }) => {
    const {data} = useGames();
    const {createSession} = useTeam();
    if (!data?.user_game_list) {
        return <></>
    }

    const onClick =async  (id: string) => {
        await createSession({variables: {gameId:id}})
        props.onClose();
    }

    const games = data.user_game_list
    return (
        <>
            <Modal title="Создать игру" open={props.visible} okButtonProps={{}} onCancel={props.onClose}>
                {
                    games.map(it => {
                        return <GameItem onClick={()=> onClick(it.id)} {...it}/>
                    })
                    
                }
            </Modal>
        </>
    );
};

export default NewGameModal;