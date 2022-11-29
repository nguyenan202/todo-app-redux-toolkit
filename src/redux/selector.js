export const todoListSelector = state => {
    let todos = state.todoList
    const filter = state.filter

    if (filter.search !== '') todos = todos.filter(todo => todo.name.toLowerCase().includes(filter.search.toLowerCase()))

    if (filter.status !== 'All') todos = todos.filter(todo => todo.completed === (filter.status === 'Completed' ? true : false))

    if (filter.priority.length !== 0) {
        todos = todos.filter(todo => {
            return filter.priority.includes(todo.priority)
        })
    }

    return todos
}