export const TimeLimit = (props: { limit: number }) => {
    const render = () => {
        if (!props.limit) {
            return 'Нет'
        }
        return props.limit
    }

    return <div>{`Ограничение по времени: ${render()}`}</div>
}