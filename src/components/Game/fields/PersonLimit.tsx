export const PersonLimit = (props: { limit: number }) => {
    const render = () => {
        if (!props.limit) {
            return 'Нет'
        }
        return props.limit
    }

    return <div>{`Макс. человек: ${render()}`}</div>
}