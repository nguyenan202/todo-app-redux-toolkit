export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const updateFilter = data => {
    return {
        type: 'filter/updateFilter',
        payload: data
    }
}

export const updateCompleted = id => {
    return {
        type: 'todoList/setCompleted',
        id
    }
}