export const TaskStrategy = (props: { taskStrategy: string }) => {
    const render = () => {
        if (props.taskStrategy === 'DEFAULT') {
            return 'По порядку'
        } else {
            return 'В случайном порядке'
        }
    }

    return <div>{`Порядок заданий: ${render()}`}</div>
}