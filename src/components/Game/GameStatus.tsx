import {Tag} from "antd";

export const GameStatus = ({status}: { status: string }) => {
    switch (status) {
        case 'CREATED':
            return <Tag color={'#2db7f5'}>Ожидает подтвержения</Tag>
    }
    return <>{status}</>
}