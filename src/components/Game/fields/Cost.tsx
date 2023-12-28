export const Cost = (props: { cost: number }) => {
    const render = () => {
        if (!props.cost) {
            return 'Бесплатно'
        }
        return `${props.cost} р`
    }

    return <div>{`Стоимость: ${render()}`}</div>
}